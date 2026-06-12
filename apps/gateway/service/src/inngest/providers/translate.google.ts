import { TranslationServiceClient } from "@google-cloud/translate";

const PROJECT_ID = process.env.GOOGLE_PROJECT_ID || "";
const LOCATION = process.env.GOOGLE_LOCATION || "global";

function makeClient(): TranslationServiceClient {
    const json = process.env.GOOGLE_CREDENTIALS;
    if (json && json.trim()) {
        const raw = JSON.parse(json); // throws if invalid
        const normalizedKey = (raw.private_key || "").replace(/\\n/g, "\n");

        // Optional: sanity checks to catch bad keys early
        if (!normalizedKey.startsWith("-----BEGIN ")) {
            throw new Error("GOOGLE_CREDENTIALS.private_key appears malformed.");
        }
        if (normalizedKey.includes("RSA PRIVATE KEY")) {
            // Older PKCS#1 keys are problematic on OpenSSL 3; best is to reissue the key.
            console.warn("[google] Detected RSA PRIVATE KEY; consider re-issuing service account key for PKCS#8.");
        }

        const credentials = { ...raw, private_key: normalizedKey };

        // Force REST transport to avoid gRPC/OpenSSL issues
        return new TranslationServiceClient({ credentials, fallback: true });
    }
    console.log('no json')
    // ADC path (file or workload identity)
    return new TranslationServiceClient({ fallback: true });
}

export const gTranslate = makeClient();

const CODE_MAP: Record<string, string> = { tl: "fil" };

function parent(): string {
    if (!PROJECT_ID) throw new Error("GOOGLE_PROJECT_ID is not set");
    return `projects/${PROJECT_ID}/locations/${LOCATION}`;
}

export async function googleDetectLanguage(content: string): Promise<string | undefined> {
    const [detections] = await gTranslate.detectLanguage({ parent: parent(), content });
    return detections.languages?.[0]?.languageCode || undefined;
}

export async function googleTranslateText(text: string, from: string, to: string): Promise<string> {
    const source = CODE_MAP[from] ?? from;
    const target = CODE_MAP[to] ?? to;
    const [resp] = await gTranslate.translateText({
        parent: parent(),
        contents: [text],
        mimeType: "text/plain",
        sourceLanguageCode: source,
        targetLanguageCode: target,
    });
    return resp.translations?.[0]?.translatedText ?? "";
}