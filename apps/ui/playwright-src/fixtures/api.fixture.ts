import { APIResponse, expect } from '@playwright/test';
import { EditFeedbackFixture } from '@_playwright-src/fixtures/edit-feedback-api.fixtures';
import { FeedbackFixture } from '@_playwright-src/fixtures/feedback-api.fixtures';
import { pageObjectTest } from '@_playwright-src/fixtures/page-object.fixture';
import { CreateAndEditFeedback, FeedbackData, ProvideFeedbackFixture } from '@_playwright-src/fixtures/provide-feedback-api.fixtures';
import { InboxPage } from '@_playwright-src/pages/inbox.pages';
import { ReviewFeedbackView } from '@_playwright-src/views/review-feedback.view';

interface PageAndApiResponse {
  response: CreateAndEditFeedback;
  page: ReviewFeedbackView;
}
interface apiTest {
  provideFeedbackByAPI: ProvideFeedbackFixture;
  createFeedbackByAPIAndOpenStory: {
    fixture: ProvideFeedbackFixture;
    feedbackId: APIResponse;
    feedbackData: FeedbackData;
  };
  editFeedbackByAPI: EditFeedbackFixture;
  feedbackFixture: FeedbackFixture;
  createFeedbackAndOpenAndRejectAfterTests: (content?: string) => Promise<PageAndApiResponse>;
}

export const provideFeedbackByAPITest = pageObjectTest.extend<apiTest>({
  provideFeedbackByAPI: async ({ request }, use) => {
    const provideFeedbackByAPI = new ProvideFeedbackFixture(request);
    await use(provideFeedbackByAPI);
  },
  feedbackFixture: async ({ request }, use) => {
    const feedbackFixture = new FeedbackFixture(request);
    await use(feedbackFixture);
  },
  editFeedbackByAPI: async ({ request, page }, use) => {
    const editFeedbackByAPI = new EditFeedbackFixture(request, page);
    await use(editFeedbackByAPI);
  },
  createFeedbackByAPIAndOpenStory: async ({ provideFeedbackByAPI, page }, use) => {
    const createFeedbackWithApi = await provideFeedbackByAPI.createFeedbackViaApi();
    await expect(createFeedbackWithApi.response).toBeOK();
    const getFeedbackId = await provideFeedbackByAPI.getFeedbackID();
    const inboxPage = new InboxPage(page);
    inboxPage.url = `inbox/stories/story/web/${getFeedbackId}/review`;
    await inboxPage.goto();

    const createFeedbackByAPIAndOpenStory = {
      fixture: provideFeedbackByAPI,
      feedbackId: getFeedbackId,
      feedbackData: createFeedbackWithApi,
    };

    await use(createFeedbackByAPIAndOpenStory);
  },
  createFeedbackAndOpenAndRejectAfterTests: async ({ provideFeedbackByAPI, page, feedbackFixture }, use) => {
    let response: CreateAndEditFeedback;
    const englishContent = 'Is there an experience you have had that you would like to share?';
    const create = async (content = englishContent): Promise<PageAndApiResponse> => {
      response = await provideFeedbackByAPI.createAndEditFeedback(content);
      const reviewFeedbackView = await provideFeedbackByAPI.openFeedback(page, response);
      await reviewFeedbackView.goToTranslateStep();
      await reviewFeedbackView.waitForPageToLoadUrl('**/translate');
      return { response: response, page: reviewFeedbackView };
    };

    await use(create);
    await feedbackFixture.unpublishFeedback(response.storyID);
  },
});
