export const storyTranslationRepositoryMock = {
  save: jest.fn(async () => ({})),
  findOne: jest.fn(async () => ({ content: 'loren ipsum' })),
  getParticularTranslationForStory: jest.fn(async () => ({})),
};
