import { expect, test } from '@_playwright-src/fixtures/merge.fixture';
import { exceptedJsonRequest, pinnedStory } from '@_playwright-src/mocks/json-paths-mocks';

test.describe('Verify pin function in moderator feedback @admin', () => {
  const channels = ['sms', 'messenger', 'whatsapp', 'telegram'];

  for (const channel of channels) {
    test(`Smoke test, check channel and content ${channel} @admin`, async ({ feedbackMocks, reviewFeedbackView }) => {
      // Arrange
      const exceptedTitle = 'Mocked data for testing purposes';
      // Act
      await feedbackMocks.mockStoryForChannelsWithPinOption(channel);

      // Assert
      await expect(reviewFeedbackView.getLocatorByText(exceptedTitle), 'Excepted content is displayed ').toBeVisible();
      await expect(reviewFeedbackView.getLocatorByText(channel), 'Correct channel is displayed on tab menu').toBeVisible();
    });

    test(`Verify pin option ${channel} @admin`, async ({ feedbackMocks, reviewFeedbackView }) => {
      // Arrange
      const contentIsPinnedToStory = 'Pinned to feedback';
      await feedbackMocks.mockStoryForChannelsWithPinOption(channel);

      // Act
      await reviewFeedbackView.pinContentToStory();

      // Assert
      await expect(reviewFeedbackView.isPinned.first(), 'Content is pinned and have excepted text').toHaveText(contentIsPinnedToStory);
      await expect(reviewFeedbackView.isPinned.last(), 'Content is pinned and have excepted text').toHaveText(contentIsPinnedToStory);
    });

    test(`Verify unPin option ${channel} @admin`, async ({ feedbackMocks, reviewFeedbackView }) => {
      // Arrange
      const contentIsNotPinnedToStory = 'Pin to feedback';
      await feedbackMocks.mockStoryForChannelsWithPinOption(channel, pinnedStory);

      // Act
      await reviewFeedbackView.pinContentToStory();
      // Assert
      await expect(reviewFeedbackView.isNotPinned.first(), 'Content is unPinned and have excepted text').toHaveText(
        contentIsNotPinnedToStory,
      );
      await expect(reviewFeedbackView.isNotPinned.last(), 'Content is unPinned and have excepted text').toHaveText(
        contentIsNotPinnedToStory,
      );
    });

    test(`Verify FE request after pin story ${channel} @admin`, async ({ feedbackMocks, reviewFeedbackView }) => {
      // Arrange
      await feedbackMocks.mockStoryForChannelsWithPinOption(channel);

      // Act
      await reviewFeedbackView.pinContentToStory();
      const exceptedRequest = await reviewFeedbackView.checkAPIRequestAfterClickTranslateButton(feedbackMocks.feedbackURL);

      // Assert
      expect(exceptedJsonRequest, 'FE send correct PUT request to the backend').toStrictEqual(exceptedRequest);
    });

    test(`Verify if messages are pined to content on first step ${channel} @admin`, async ({ feedbackMocks }) => {
      // Arrange
      const exceptedContent = `U can Pin this Message English\nMocked data for testing purposes\nPin second \n`;
      const reviewFeedbackView = await feedbackMocks.mockStoryForChannelsWithPinOption(channel);

      // Act
      await reviewFeedbackView.pinContentToStory();
      await reviewFeedbackView.channelTabName.last().click();
      
      // Assert
      await expect(
        reviewFeedbackView.feedbackContentInput,
        `Feedback content have pinned messages and text i equal to "${exceptedContent}"`,
      ).toHaveValue(exceptedContent);
    });

    test(`Verify if messages are pined to content on last step ${channel} @admin`, async ({ feedbackMocks }) => {
      // Arrange
      const exceptedContent = `\nU can Pin this Message English\nMocked data for testing purposes\nPin second `;
      const reviewFeedbackView = await feedbackMocks.mockStoryForChannelsWithPinOption(channel);

      // Act
      await reviewFeedbackView.pinContentToStory();
      // Mock put request
      await feedbackMocks.mockUpdateStory();
      await feedbackMocks.mockLastStepStory(channel);
      await reviewFeedbackView.translateButton.click();
      await reviewFeedbackView.waitForPageToLoadUrl('**/translate');
      await reviewFeedbackView.channelTabName.last().click();

      // Assert
      await expect(
        reviewFeedbackView.feedbackContentInput,
        'Feedback content have pinned messages and text i equal to excepted content',
      ).toHaveValue(exceptedContent);
    });
  }
});
