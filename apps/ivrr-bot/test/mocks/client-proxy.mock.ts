export const toPromise = jest.fn(async () => ({ success: true }));

export const clientProxyMock: { send: any } = {
  send: () => ({ toPromise }),
};
