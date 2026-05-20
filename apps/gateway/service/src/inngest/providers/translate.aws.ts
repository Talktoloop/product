

// src/inngest/providers/translate.aws.ts
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";

const awsTranslateClient = new TranslateClient({
    region: process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "eu-central-1",
});

/**
 * Translate text using AWS Translate
 */
export async function awsTranslateText(params: {
    text: string;
    sourceLanguageCode: string;
    targetLanguageCode: string;
}) {
    const command = new TranslateTextCommand({
        Text: params.text,
        SourceLanguageCode: params.sourceLanguageCode,
        TargetLanguageCode: params.targetLanguageCode,
    });

    const result = await awsTranslateClient.send(command);

    return {
        translatedText: result.TranslatedText ?? "",
        providerUsed: "aws" as const,
    };
}