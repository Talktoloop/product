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
    if (params.sourceType === "STORY") {
        return saveTranslationForStory(
            params.sourceId,
            params.languageId,
            params.translatedText
        );
    }

    // Comments currently use a different entity shape (kept as-is).
    const repo = ds.getRepository(StoryTranslationEntity);

    return repo.save({
        storyId: params.sourceId,
        languageId: params.languageId,
        content: params.translatedText,
        provider: params.providerUsed,
    });
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
    const languageRepo = ds.getRepository(LanguageEntity);
    const language = await languageRepo.findOneOrFail({ where: { code: languageCode.split("-")[0] } });
    const translation = await translationRepo.findOneOrFail({ where: { storyId, languageId: language.id } });
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
    const languageRepo = ds.getRepository(LanguageEntity);

    // Find language by ID
    const language = await languageRepo.findOneOrFail({ where: { id: languageId } });

    // Try to update existing translation for this story/language.
    // NOTE: If your table distinguishes translation "type" per row, we use TEXT as the default.
    const existing = await translationRepo.findOne({
        where: {
            storyId,
            languageId: language.id,
        },
    });

    const payload: Partial<StoryTranslationEntity> = {
        storyId,
        languageId: language.id,
        content: translatedText,
        numberOfWords: countWords(translatedText),
        isOriginalContent: false,
        type: TRANSLATION_TYPE_CONSTANTS.MACHINE,
        status: TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
    };

    if (existing) {
        return translationRepo.save({
            ...existing,
            ...payload,
        } as StoryTranslationEntity);
    }

    return translationRepo.save(payload as StoryTranslationEntity);
}