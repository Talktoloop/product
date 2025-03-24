export const fetch = jest.fn(async () => ({}));

export const twilioMock = {
  lookups: {
    phoneNumbers: jest.fn(async (phone: string) => {
      console.log('phone', phone);
      return {};
    }),
  },
};
