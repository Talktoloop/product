import { expect, test } from '@_playwright-src/fixtures/merge.fixture';
import { FeedbackPage } from '@_playwright-src/pages/feedback.pages';
import { RejectFeedbackModal } from '@_playwright-src/views/reject-feedback.view';
import { StoryDetailsView } from '@_playwright-src/views/story-details.view';

test.describe('Verify feedback publish and reject @OL-3630 @admin', () => {
  // Arrange
  let rejectFeedbackModal: RejectFeedbackModal;
  const translatePageUrl = '**/translate';

  test.beforeEach(async ({ page }) => {
    // Arrange
    rejectFeedbackModal = new RejectFeedbackModal(page);
  });

  test('Publish feedback then reject it', async ({ page, createFeedbackByAPIAndOpenStory, reviewFeedbackView }) => {
    // Act
    let inboxPage = await reviewFeedbackView.publishFeedback();

    //Assert
    await expect(inboxPage.feedbackPublishedPopUp).toBeVisible();

    await test.step('Reject published feedback', async () => {
      // Arrange
      const waitForPage = '**/review';
      const storyDetailsView = new StoryDetailsView(page);
      const feedbackId = createFeedbackByAPIAndOpenStory.feedbackId;

      // Act
      inboxPage = await storyDetailsView.goToFeedback(feedbackId);
      inboxPage = await storyDetailsView.clickEditFeedback();
      await inboxPage.waitForPageToLoadUrl(waitForPage);
      await reviewFeedbackView.rejectButton.click();
      inboxPage = await rejectFeedbackModal.selectReasonAndRejectFeedback();

      // Assert
      await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeVisible();
    });
  });

  test('Published feedback is visible on feedback page @LOOP_R03_01', async ({
    page,
    createFeedbackByAPIAndOpenStory,
    reviewFeedbackView,
  }) => {
    // Arrange
    const feedbackPage = new FeedbackPage(page);
    const exceptedFeedback = createFeedbackByAPIAndOpenStory.feedbackData.content;

    // Act
    const inboxPage = await reviewFeedbackView.publishFeedback();
    await expect(inboxPage.feedbackPublishedPopUp).toBeVisible();
    await feedbackPage.goto();

    //Assert
    await expect(page.getByText(exceptedFeedback)).toBeVisible();
  });

  test('Failure publish feedback @LOOP_R03_01', async ({ reviewFeedbackView, createFeedbackByAPIAndOpenStory }) => {
    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.translateButton.click();

    //Assert
    await expect(reviewFeedbackView.alertPopUp).toBeVisible();
  });

  test('Reject feedback @OL-3630', async ({ reviewFeedbackView, createFeedbackByAPIAndOpenStory }) => {
    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.rejectButton.click();
    const inboxPage = await rejectFeedbackModal.selectReasonAndRejectFeedback();

    // Assert
    await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeVisible();
  });

  test('Reject feedback with provide feedback data @OL-3630', async ({ reviewFeedbackView, createFeedbackByAPIAndOpenStory }) => {
    // Arrange
    const reasonText = 'The feedback has offensive or discriminatory language in it';

    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.rejectButton.click();
    const inboxPage = await rejectFeedbackModal.selectReasonAndRejectFeedback(reasonText);

    // Assert
    await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeVisible();
  });

  test('Failure Reject feedback with invalid provide feedback data @OL-3630', async ({
    reviewFeedbackView,
    createFeedbackByAPIAndOpenStory,
  }) => {
    // Arrange
    const reasonText = '0';

    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.rejectButton.click();
    const inboxPage = await rejectFeedbackModal.selectReasonAndRejectFeedback(reasonText);

    // Assert
    await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeHidden();
  });

  test('Failure Reject feedback @OL-3630', async ({ reviewFeedbackView, createFeedbackByAPIAndOpenStory }) => {
    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.rejectButton.click();
    const inboxPage = await rejectFeedbackModal.clickRejectButton();

    // Assert
    await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeHidden();
  });

  test('Failure Reject feedback on last step @OL-3630', async ({ reviewFeedbackView, createFeedbackByAPIAndOpenStory }) => {
    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.goToTranslateStep();
    await reviewFeedbackView.waitForPageToLoadUrl(translatePageUrl);
    await reviewFeedbackView.rejectButton.click();
    const inboxPage = await rejectFeedbackModal.clickRejectButton();

    // Assert
    await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeHidden();
  });

  test('Reject feedback on last step @OL-3630', async ({ reviewFeedbackView, createFeedbackByAPIAndOpenStory }) => {
    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.goToTranslateStep();
    await reviewFeedbackView.waitForPageToLoadUrl(translatePageUrl);
    await reviewFeedbackView.rejectButton.click();
    const inboxPage = await rejectFeedbackModal.selectReasonAndRejectFeedback();

    // Assert
    await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeVisible();
  });

  test('Reject feedback with provide feedback data on last step @OL-3630', async ({
    reviewFeedbackView,
    createFeedbackByAPIAndOpenStory,
  }) => {
    // Arrange
    const reasonText = 'The feedback has offensive or discriminatory language in it';

    // Act
    createFeedbackByAPIAndOpenStory;
    await reviewFeedbackView.goToTranslateStep();
    await reviewFeedbackView.waitForPageToLoadUrl(translatePageUrl);
    await reviewFeedbackView.rejectButton.click();
    const inboxPage = await rejectFeedbackModal.selectReasonAndRejectFeedback(reasonText);

    // Assert
    await expect(inboxPage.feedbackRejectedPopUp, 'Feedback has been rejected.').toBeVisible();
  });
});
