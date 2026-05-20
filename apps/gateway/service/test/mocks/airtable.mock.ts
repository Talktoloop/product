export const create = jest.fn(async () => ({}));
export const retrieve = jest.fn(async () => ({}));

export const airTableMock: { table: any } = {
  table: () => ({ create, retrieve }),
};
