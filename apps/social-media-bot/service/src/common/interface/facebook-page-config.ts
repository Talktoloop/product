export interface FacebookLanguage {
  lang: string;
  locale: string;
  thanksImageUrl: string;
}

export interface FacebookPageConfigInterface {
  pageId: string;
  pageAccessToken: string;
  supportedLanguages: FacebookLanguage[];
  defaultLanguage: string;
}
