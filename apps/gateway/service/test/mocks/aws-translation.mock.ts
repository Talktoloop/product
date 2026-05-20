const response = {
  ResultList: [
    {
      Index: 0,
      Languages: [{ LanguageCode: 'en', Score: 0.9960805177688599 }],
    },
  ],
  ErrorList: [],
};

export const awsTranslationMock = {
  send: jest.fn((params, cb) => cb(undefined, response)),
};
