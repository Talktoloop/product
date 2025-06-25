export const googlePlacesMock = {
  autocomplete: jest.fn(async (params) => ({
    predictions: [],
    params,
  })),
};
