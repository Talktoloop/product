import { prepareRandomFeedbackData } from '@_playwright-src/factories/provide-feedback.factory';
import { expect, test } from '@_playwright-src/fixtures/merge.fixture';
import { CreateAndEditFeedback } from '@_playwright-src/fixtures/provide-feedback-api.fixtures';

test.describe('Verify edited feedback, publish, reject, edit @admin', () => {
  let feedbackId: CreateAndEditFeedback;

  test.beforeEach(async ({ page, provideFeedbackByAPI }) => {
    // Arrange
    feedbackId = await provideFeedbackByAPI.createAndEditFeedback();
    provideFeedbackByAPI.openFeedback(page, feedbackId);
  });

  test.afterAll(async ({ feedbackFixture }) => {
    await feedbackFixture.unpublishFeedback(feedbackId.storyID);
  });

  test('Edited feedback have pending-edit status', async ({ provideFeedbackByAPI, editFeedbackByAPI }) => {
    // Arrange
    const exceptedStatus = 'pending_edit';

    // Act
    const feedbackId = await provideFeedbackByAPI.createAndPublishFeedback();
    await editFeedbackByAPI.setFeedbackStatusEdited(feedbackId);
    const webFeedbackDetails = await provideFeedbackByAPI.getWebFeedbackDetails(feedbackId);

    // Assert
    expect(webFeedbackDetails.status, 'Feedback status changed to pending-edit').toEqual(exceptedStatus);
  });

  test('Verify if textarea for edit is displayed after click toggle', async ({ reviewFeedbackView }) => {
    // Act
    await reviewFeedbackView.editFeedbackToggleButton.click();

    // Assert
    await expect(reviewFeedbackView.editFeedbackToggleButton).toBeChecked();
    await expect(reviewFeedbackView.feedbackEditContentInput).toBeVisible();
  });

  test('Edit original feedback and save changes', async ({ reviewFeedbackView }) => {
    // Arrange
    const randomFeedbackData = prepareRandomFeedbackData();
    const exceptedContent = randomFeedbackData.body;

    // Act
    await reviewFeedbackView.saveEditedFeedbackContent(exceptedContent);

    //Assert
    await expect(reviewFeedbackView.feedbackContentInput, 'On last step new content data is displayed').toHaveValue(exceptedContent);
  });

  test('Edit original feedback and publish', async ({ page, reviewFeedbackView, storyDetailsView }) => {
    // Arrange
    const randomFeedbackData = prepareRandomFeedbackData();
    const exceptedContent = randomFeedbackData.body;

    // Act
    await reviewFeedbackView.saveEditedFeedbackContent(exceptedContent);
    const inboxPage = await reviewFeedbackView.clickPublishFeedbackButton();
    await expect(inboxPage.feedbackPublishedPopUp).toBeVisible();
    await page.goto('');

    // Assert
    await expect(page.getByText(exceptedContent), 'Edited content is displayed on dashboard').toBeVisible();

    await test.step('Re-edit edited original content from feedback and publish', async () => {
      // Arrange
      const randomFeedbackData = prepareRandomFeedbackData();
      const exceptedContent = randomFeedbackData.body;

      // Act
      await storyDetailsView.goToFeedback(feedbackId.storyID);
      await storyDetailsView.clickEditFeedback();
      await reviewFeedbackView.feedbackEditContentInput.fill(exceptedContent);
      await reviewFeedbackView.translateButton.click();
      const inboxPage = await reviewFeedbackView.clickPublishFeedbackButton();
      await expect(inboxPage.feedbackPublishedPopUp).toBeVisible();
      await page.goto('');

      // Assert
      await expect(page.getByText(exceptedContent), 'Re-edited content is displayed on dashboard').toBeVisible();
    });
  });
  test('Check edit input signs validation ', async ({ reviewFeedbackView }) => {
    // Arrange
    const randomFeedbackData = prepareRandomFeedbackData(4);

    // Act
    await reviewFeedbackView.saveEditedFeedbackContent(randomFeedbackData.body);

    //Assert
    await expect(reviewFeedbackView.invalidContentLengthPopUp, 'Alert popup with wrong length validation is displayed').toBeVisible();
  });

  test('Try Publish empty edited content', async ({ reviewFeedbackView }) => {
    // Act
    await reviewFeedbackView.saveEditedFeedbackContent();

    //Assert
    await expect(reviewFeedbackView.invalidContentLengthPopUp, 'Alert popup with wrong length validation is displayed').toBeVisible();
  });
});
