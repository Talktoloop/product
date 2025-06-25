export const s3Mock: { s3Client: any } = {
  s3Client: {
    send: jest.fn(async () => ({
      Body: JSON.stringify({}),
    })),
  },
};
