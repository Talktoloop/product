export interface WhatsappLanguage {
  lang: string;
  thanksImageUrl: string;
}

export interface WhatsappNumberConfig {
  pageId: string;
  supportedLanguages: WhatsappLanguage[];
  defaultLanguage: string;
}
