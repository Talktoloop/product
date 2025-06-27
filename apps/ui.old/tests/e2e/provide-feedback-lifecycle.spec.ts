import { prepareRandomFeedbackData } from '@_playwright-src/factories/provide-feedback.factory';
import { expect, test } from '@_playwright-src/fixtures/merge.fixture';
import {} from '@_playwright-src/test-data/user.data';

test.describe('Verify create new feedback @admin', () => {
  test('create and submit new feedback @LOOP_R02_01', async ({ provideFeedbackPage, reviewFeedbackView, provideFeedbackByAPI }) => {
    // Arrange
    const prepareFeedbackContent = prepareRandomFeedbackData();
    const expectedFeedbackContent = prepareFeedbackContent.body;

    // Act
    const inboxPage = await provideFeedbackPage.provideSimpleValidFeedback(prepareFeedbackContent);

    // Assert
    await expect(provideFeedbackPage.alertPopUpFeedbackSubmitted, 'Alert popup feedback is created is displayed').toBeVisible();
    const getFeedbackId = await provideFeedbackByAPI.getFeedbackID();

    await test.step('verify new created feedback @LOOP_R02_02', async () => {
      // Arrange
      inboxPage.url = `inbox/stories/story/web/${getFeedbackId}/review`;

      // Act
      await inboxPage.goto();

      // Assert
      const expectedFeedbackText = await reviewFeedbackView.getFeedbackInputValue();
      expect(expectedFeedbackText, 'Feedback content should be equal ').toEqual(expectedFeedbackContent);
    });
  });

  test('create new feedback with all fields @LOOP_R02_03', async ({ provideFeedbackPage, reviewFeedbackView, provideFeedbackByAPI }) => {
    // Arrange
    const contentData = prepareRandomFeedbackData();

    // Act
    const feedbackDetails = await provideFeedbackPage.provideFeedbackWithAllFields(contentData);
    const inboxPage = feedbackDetails.inboxPage;

    // Assert
    await expect(provideFeedbackPage.alertPopUpFeedbackSubmitted, 'Alert popup is displayed').toBeVisible();
    const getFeedbackId = await provideFeedbackByAPI.getFeedbackID();

    await test.step('verify feedback data', async () => {
      // Arrange
      inboxPage.url = `inbox/stories/story/web/${getFeedbackId}/review`;

      // Act
      await inboxPage.goto();
      const expectedFeedbackContent = await reviewFeedbackView.getFeedbackInputValue();
      const expectedTypeOfFeedback = reviewFeedbackView.checkTypeOfFeedbackLocator(feedbackDetails.typeOfFeedback);
      const expectedAuthorName = await reviewFeedbackView.authorInputValue();
      const expectedAge = reviewFeedbackView.checkAgeLocator(feedbackDetails.userAge);
      const expectedGender = reviewFeedbackView.checkGenderLocator(feedbackDetails.userGender);
      const expectedDisability = reviewFeedbackView.checkDisabilityLocator(feedbackDetails.userCondition);
      const expectedLocation = reviewFeedbackView.checkLocationLocator(feedbackDetails.location);
      const expectedOrganization = await reviewFeedbackView.returnOrganizationName();

      // Assert
      expect(expectedFeedbackContent, 'Feedback content should be equal ').toEqual(feedbackDetails.feedbackContent);
      expect(expectedAuthorName).toContain(feedbackDetails.userName);
      await expect.soft(expectedTypeOfFeedback).toBeVisible();
      await expect.soft(expectedAge).toBeVisible();
      await expect.soft(expectedGender).toBeVisible();
      await expect.soft(expectedDisability).toBeVisible();
      await expect.soft(expectedLocation).toBeVisible();
      expect.soft(feedbackDetails.organization).toContain(expectedOrganization);
    });
  });

  test('check feedback textarea with 4 signs @LOOP_R02_04', async ({ provideFeedbackPage }) => {
    // Arrange
    const contentData = prepareRandomFeedbackData(4);

    // Act
    await provideFeedbackPage.feedbackWithInvalidContentLength(contentData);

    // Assert
    await expect(provideFeedbackPage.alertInvalidFeedbackContent).toBeVisible();
  });

  test('check feedback textarea with 30001 signs @LOOP_R02_04', async ({ provideFeedbackPage }) => {
    // Arrange
    const contentData = prepareRandomFeedbackData(30001);

    // Act
    const feedbackData = await provideFeedbackPage.feedbackWithInvalidContentLength(contentData);

    // Assert
    expect(feedbackData.feedbackContent.length).toEqual(30000);
  });

  test('check feedback textarea with 30000 signs @LOOP_R02_04', async ({ provideFeedbackPage }) => {
    // Arrange
    const contentData = prepareRandomFeedbackData(30000);

    // Act
    const feedbackData = await provideFeedbackPage.feedbackWithInvalidContentLength(contentData);

    // Assert
    await expect(provideFeedbackPage.alertInvalidFeedbackContent).toBeHidden();
    expect(feedbackData.feedbackContent.length).toEqual(30000);
  });

  test('check feedback textarea with 29999 signs @LOOP_R02_04', async ({ provideFeedbackPage }) => {
    // Arrange
    const contentData = prepareRandomFeedbackData(29999);

    // Act
    const feedbackData = await provideFeedbackPage.feedbackWithInvalidContentLength(contentData);

    // Assert
    await expect(provideFeedbackPage.alertInvalidFeedbackContent).toBeHidden();
    expect(feedbackData.feedbackContent.length).toEqual(29999);
  });

  test('check feedback textarea with 5 signs @LOOP_R02_04', async ({ provideFeedbackPage }) => {
    // Arrange
    const contentData = prepareRandomFeedbackData(5);

    // Act
    const feedbackData = await provideFeedbackPage.feedbackWithInvalidContentLength(contentData);

    // Assert
    await expect(provideFeedbackPage.alertInvalidFeedbackContent).toBeHidden();
    expect(feedbackData.feedbackContent.length).toEqual(5);
  });

  test('check feedback textarea with 6 signs @LOOP_R02_04', async ({ provideFeedbackPage }) => {
    // Arrange
    const contentData = prepareRandomFeedbackData(6);

    // Act
    const feedbackData = await provideFeedbackPage.feedbackWithInvalidContentLength(contentData);

    // Assert
    await expect(provideFeedbackPage.alertInvalidFeedbackContent).toBeHidden();
    expect(feedbackData.feedbackContent.length).toEqual(6);
  });
});
