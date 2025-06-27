import { pageObjectTest } from '@_playwright-src/fixtures/page-object.fixture';
import { FeedbackMocks } from '@_playwright-src/mocks/feedback-mocks';

interface Mocks {
  feedbackMocks: FeedbackMocks;
}

export const mocksTest = pageObjectTest.extend<Mocks>({
  feedbackMocks: async ({ page }, use) => {
    const feedbackMocks = new FeedbackMocks(page);
    await use(feedbackMocks);
  },
});
