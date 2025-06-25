const body = `{"body":"{\\"message\\":{\\"TranslatedText\\":\\"Tested message\\"}}"}`;

export const lambdaMock = {
  send: jest.fn((params, cb) => cb(undefined, { Payload: body })),
};
