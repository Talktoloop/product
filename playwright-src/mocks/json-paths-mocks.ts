import { parseFileToJson } from '@_playwright-src/helpers/parseToJson.helper';

export const pathStoryMockJson = 'playwright-src/test-data/story.json';
export const pathPinnedStoryJson = 'playwright-src/test-data/pinned-story.json';
export const pathPinStoryRequestJson = 'playwright-src/test-data/pin-story-request.json';

export const socialChannelsMockedData = parseFileToJson(pathStoryMockJson);
export const pinnedStory = parseFileToJson(pathPinnedStoryJson);
export const exceptedJsonRequest = parseFileToJson(pathPinStoryRequestJson);
