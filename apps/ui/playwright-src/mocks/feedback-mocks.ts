import { Page } from '@playwright/test';
import { pinnedStory, socialChannelsMockedData } from '@_playwright-src/mocks/json-paths-mocks';
import { ReviewFeedbackView } from '@_playwright-src/views/review-feedback.view';

export class FeedbackMocks {
  constructor(private page: Page) {}
  reviewFeedbackView = new ReviewFeedbackView(this.page);
  storyId = 'f7d8ad72-9be6-4707-994c-d083c44b0028';
  feedbackURL = `*/**/api/v1/story/moderator/${this.storyId}`;

  async mockStoryForChannelsWithPinOption(channel: string, jsonFile = socialChannelsMockedData): Promise<ReviewFeedbackView> {
    const mockedUrl = `${channel}/${this.storyId}`;
    this.reviewFeedbackView.url = `inbox/stories/story/${mockedUrl}/review`;

    // with this option test should be long because it need time to mock data
    await this.page.route(`*/**/api/v1/story/moderator/${mockedUrl}`, async (route) => {
      const json = jsonFile;
      json['channel'] = channel;
      await route.fulfill({ json });
    });

    const request = this.page.waitForResponse(`*/**/api/v1/story/moderator/${mockedUrl}`);
    await this.reviewFeedbackView.goto();
    const response = await request;
    response.ok();
    return new ReviewFeedbackView(this.page);
  }

  async mockUpdateStory(): Promise<ReviewFeedbackView> {
    //mock response - just before update
    await this.page.route(`*/**/api/v1/story/moderator/${this.storyId}`, async (route) => {
      const response = await route.fetch();
      const json = {
        success: true,
      };
      response.status = () => 200;
      route.fulfill({ response, json });
    });

    return new ReviewFeedbackView(this.page);
  }

  async mockLastStepStory(channel: string): Promise<ReviewFeedbackView> {
    const mockedUrl = `${channel}/${this.storyId}`;

    //mock response - just before update
    await this.page.route(`*/**/api/v1/story/moderator/${mockedUrl}`, async (route) => {
      const response = await route.fetch();
      const json = pinnedStory;

      json['channel'] = channel;

      response.status = () => 200;
      route.fulfill({ response, json });
    });

    return new ReviewFeedbackView(this.page);
  }
}
