// src/inngest/helpers/translations.helper.ts
import { getDataSource } from "./db";
import { StoryTranslationEntity } from "../../story/entity/story-translation.entity";
import { StoryEntity } from "../../story/entity/story.entity";
import { STORY_STATUS } from "@ourloop/shared";
import { LanguageEntity } from "../../language/entity/language.entity";
import { TRANSLATION_TYPE_CONSTANTS } from "../../common/constant/translation-type.constant";
import { TRANSLATION_STATUS_CONSTANTS } from "../../common/constant/translation-status.constants";

type Provider = "AWS" | "GOOGLE";

function countWords(text: string) {
    const t = (text ?? "").trim();
    if (!t) return 0;
    return t.split(/\s+/).length;
}

export async function saveTranslation(params: {
    sourceType: "STORY" | "COMMENT";
    sourceId: string;
    languageId: number;
    translatedText: string;
    providerUsed: Provider;
}) {
    const ds = await getDataSource();

    // STORY translations are stored in story_translation and reference LanguageEntity by id.
    if (params.sourceType?.toUpperCase() === "STORY") {
        return saveTranslationForStory(
            params.sourceId,
            params.languageId,
            params.translatedText
        );
    }

    // Comments are stored in the same table; upsert on (story_id, language_id) so
    // re-translation / concurrent runs can't trip the unique index.
    const repo = ds.getRepository(StoryTranslationEntity);

    return repo.upsert({
        storyId: params.sourceId,
        languageId: params.languageId,
        content: params.translatedText,
        numberOfWords: countWords(params.translatedText),
        isOriginalContent: false,
        type: TRANSLATION_TYPE_CONSTANTS.MACHINE,
        status: TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
    }, ['storyId', 'languageId']);
}

export async function updateStoryStatus(storyId: string, status: STORY_STATUS) {
    const ds = await getDataSource();
    const repo = ds.getRepository(StoryEntity);
    const story = await repo.findOneOrFail({ where: { id: storyId } });
    story.status = status;
    await repo.save(story);
}

export async function saveTranscription(content: string, storyId: string, languageCode: string) {
    const ds = await getDataSource();
    const translationRepo = ds.getRepository(StoryTranslationEntity);
    // The transcript is the story's original-language content. Match the original
    // row directly — its language_id is the story's language, which may be a Somali
    // dialect (Maxatiri/af Maay) whose id differs from the base `so` code.
    const translation = await translationRepo.findOneOrFail({ where: { storyId, isOriginalContent: true } });
    translation.content = content;
    await translationRepo.save(translation);
    await updateStoryStatus(storyId, STORY_STATUS.PENDING_TRANSLATION)
    return true;
}

export async function saveTranslationForStory(
    storyId: string,
    languageId: number,
    translatedText: string
) {
    const ds = await getDataSource();
    const translationRepo = ds.getRepository(StoryTranslationEntity);
    const language = await ds
        .getRepository(LanguageEntity)
        .findOneOrFail({ where: { id: languageId } });

    const payload: Partial<StoryTranslationEntity> = {
        storyId,
        languageId: language.id,
        content: translatedText,
        numberOfWords: countWords(translatedText),
        isOriginalContent: false,
        type: TRANSLATION_TYPE_CONSTANTS.MACHINE,
        status: TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
    };

    // Atomic INSERT ... ON DUPLICATE KEY UPDATE on the (story_id, language_id)
    // unique index — safe under concurrent/duplicate translation runs.
    return translationRepo.upsert(payload, ['storyId', 'languageId']);
}

// Marks one story/language translation as ERROR so moderators can retry it.
// Never downgrades a successful (TRANSLATED) row.
export async function markTranslationError(storyId: string, languageId: number) {
    const ds = await getDataSource();
    const translationRepo = ds.getRepository(StoryTranslationEntity);
    const existing = await translationRepo.findOne({ where: { storyId, languageId } });
    if (existing?.status === TRANSLATION_STATUS_CONSTANTS.TRANSLATED) return existing;
    if (existing) {
        existing.status = TRANSLATION_STATUS_CONSTANTS.ERROR;
        return translationRepo.save(existing);
    }
    return translationRepo.save({
        storyId,
        languageId,
        content: "",
        numberOfWords: 0,
        isOriginalContent: false,
        type: TRANSLATION_TYPE_CONSTANTS.MACHINE,
        status: TRANSLATION_STATUS_CONSTANTS.ERROR,
    } as StoryTranslationEntity);
}

// Marks every machine-translatable target (visible + has a provider, excluding the
// source language) ERROR unless already TRANSLATED. Used when the whole translation
// run exhausts its retries, so each unfinished language is retryable.
export async function markStoryTranslationsError(storyId: string, originalTextLangCode: string) {
    const ds = await getDataSource();
    const languages = await ds.getRepository(LanguageEntity).find({ where: { visible: true } });
    const targets = languages.filter((l) => !!l.provider && l.code !== originalTextLangCode);
    for (const lang of targets) {
        await markTranslationError(storyId, lang.id);
    }
}