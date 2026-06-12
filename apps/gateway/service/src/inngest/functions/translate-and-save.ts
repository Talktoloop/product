import { inngest } from "../client";
import { getEnglishAndTargets, TargetLang } from "../helpers/languages.helper";
import { googleTranslateText } from "../providers";
import { awsTranslateText } from "../providers/translate.aws";
import { getDataSource } from "../helpers/db";
import { LanguageEntity } from "../../language/entity/language.entity";
import { saveTranslation, updateStoryStatus, markTranslationError, markStoryTranslationsError } from "../helpers/translations.helper";
import { STORY_STATUS } from "@ourloop/shared";


type TranslationRequested = {
    data: {
        sourceId: string;
        sourceType: "STORY" | "COMMENT";
        content: string;
        originalTextLangCode: string;
    };
};

export const translateAndSave = inngest.createFunction(
    {
        id: "translation.translate-and-save",
        concurrency: [
            { limit: 5 },
            { limit: 1, key: "event.data.sourceId" },
        ],
        retries: 4,
        triggers: [{ event: "translation/requested.v1" }],
        onFailure: async ({ event }) => {
            const original = (event as any)?.data?.event;
            const data = original?.data ?? {};
            if (data.sourceType === "STORY" && data.sourceId) {
                await markStoryTranslationsError(data.sourceId, data.originalTextLangCode);
            }
        },
    },
    async ({ event, step }) => {
        const {
            sourceId,
            sourceType,
            content: originalContent,
            originalTextLangCode,
        } = event.data as TranslationRequested["data"];

        let baseContent = originalContent;


        const ds = await getDataSource();
        const languageRepo = ds.getRepository(LanguageEntity);

        const originalLang = await step.run(`load-original-lang:${sourceId}`, async () => {
            return languageRepo.findOne({ where: { code: originalTextLangCode } });
        });

        if (!originalLang) {
            throw new Error(`[translate-and-save] Original language not found for id=${originalTextLangCode}`);
        }

        let currentFrom = originalLang.code;

        const { english, targets: to } = await step.run(`load-targets:${sourceId}`, async () => {
            return getEnglishAndTargets(originalTextLangCode);
        });

        const filteredTargets = (to as TargetLang[]).filter(
            (t) => !!t?.code && !!t.provider
        );

        const summary = {
            total: filteredTargets.length,
            translated: 0,
            skippedUnsupported: 0,
            failures: 0,
            results: {} as Record<
                string,
                {
                    status: "TRANSLATED" | "SKIPPED_UNSUPPORTED" | "FAILED";
                    providerUsed?: "aws" | "google";
                    text?: string;
                    reason?: string;
                }
            >,
        };

        if (currentFrom !== english.code) {
            const enText = await step.run(`hop-to-en:${sourceId}`, async () => {
                if (english.provider === "aws") {
                    const res = await awsTranslateText({
                        text: baseContent,
                        sourceLanguageCode: currentFrom,
                        targetLanguageCode: english.code,
                    });
                    return res.translatedText;
                } else {
                    return await googleTranslateText(baseContent, currentFrom, english.code);
                }
            });
            baseContent = enText;
            currentFrom = english.code;

            if (filteredTargets.some((t) => t.code === english.code)) {
                await step.run(`save-translation:${sourceId}:${english.code}`, async () => {
                    return saveTranslation({
                        sourceType,
                        sourceId,
                        languageId: english.id,
                        translatedText: enText,
                        providerUsed: english.provider === "aws" ? "AWS" : "GOOGLE",
                    });
                });

                summary.translated += 1;
                summary.results[english.code] = {
                    status: "TRANSLATED",
                    providerUsed: english.provider,
                    text: enText,
                };

                await step.sendEvent("completed-en", {
                    name: "translation/completed.v1",
                    data: {
                        sourceId,
                        to: english.code,
                        providerUsed: english.provider,
                        status: "TRANSLATED",
                    },
                });
            }
        }

        for (const target of filteredTargets) {
            if (!target?.code) continue;
            if (target.code === currentFrom) continue;

            const result: any = await step.run(`translate:${sourceId}:${target.code}`, async () => {
                const tryProvider = async (provider: "aws" | "google") => {
                    if (provider === "aws") {
                        const res = await awsTranslateText({
                            text: baseContent,
                            sourceLanguageCode: currentFrom,
                            targetLanguageCode: target.code,
                        });
                        return res.translatedText;
                    }
                    return await googleTranslateText(baseContent, currentFrom, target.code);
                };
                try {
                    const translated = await tryProvider(target.provider);
                    return { ok: true as const, translated, providerUsed: target.provider };
                } catch (err: any) {
                    const msg = err?.message || String(err);
                    const unsupportedPrimary =
                        target.provider === "aws"
                            ? /unsupported/i.test(msg) || /not supported/i.test(msg) || /language/i.test(msg)
                            : /unsupported/i.test(msg) || /not supported/i.test(msg) || /language/i.test(msg);


                    if (unsupportedPrimary && target.alternativeProvider) {
                        try {
                            const translated = await tryProvider(target.alternativeProvider);
                            return { ok: true, translated, providerUsed: target.alternativeProvider };
                        } catch (err2: any) {
                            const msg2 = err2?.message || String(err2);
                            return { ok: false, status: "FAILED", reason: msg2 };
                        }
                    }


                    if (unsupportedPrimary) {
                        return { ok: false as const, status: "SKIPPED_UNSUPPORTED" as const, reason: msg };
                    }


                    throw err;
                }
            });

            if (result.ok) {
                const translatedText: string = result.translated;
                const providerUsed: "aws" | "google" = result.providerUsed;

                summary.translated += 1;
                summary.results[target.code] = {
                    status: "TRANSLATED",
                    providerUsed,
                    text: translatedText,
                };

                await step.run(`save-translation:${sourceId}:${target.code}`, async () => {
                    return saveTranslation({
                        sourceType,
                        sourceId,
                        languageId: target.id,
                        translatedText,
                        providerUsed: providerUsed === "aws" ? "AWS" : "GOOGLE",
                    });
                });

                await step.sendEvent("completed", {
                    name: "translation/completed.v1",
                    data: {
                        sourceId,
                        to: target.code,
                        providerUsed,
                        status: "TRANSLATED",
                    },
                });
            } else {
                const status = (result as any).status as "SKIPPED_UNSUPPORTED" | "FAILED";
                const reason = (result as any).reason as string | undefined;

                if (status === "SKIPPED_UNSUPPORTED") {
                    summary.skippedUnsupported += 1;
                } else {
                    summary.failures += 1;
                    if (sourceType === "STORY") {
                        await step.run(`mark-error:${sourceId}:${target.code}`, async () => {
                            return markTranslationError(sourceId, target.id);
                        });
                    }
                }

                summary.results[target.code] = {
                    status,
                    reason,
                };

                await step.sendEvent("completed", {
                    name: "translation/completed.v1",
                    data: {
                        sourceId,
                        to: target.code,
                        providerUsed: target.provider,
                        status,
                        reason,
                    },
                });
            }
        }

        if (sourceType === "STORY") {
            await step.run("update-story", async () => {
                await updateStoryStatus(sourceId, STORY_STATUS.PENDING_EDIT);
            });
        }

        return summary;

    }
);