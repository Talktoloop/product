export interface TelegramLanguage {
  lang: string;
  thanksImageUrl: string;
}

export interface TelegramNumberConfig {
  pageId: string;
  token: string;
  supportedLanguages: TelegramLanguage[];
  defaultLanguage: string;
}
