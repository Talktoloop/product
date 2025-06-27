import { expect, test } from '@_playwright-src/fixtures/merge.fixture';

test.describe('Verify second menu on Inbox page @smoke', () => {
  test('verify replies button', async ({ inboxPage }) => {
    // Arrange
    const exceptedPageTitle = 'Replies';
    const inboxRepliesUrl = '**/replies';

    // Act
    inboxPage = await inboxPage.clickRepliesButton();
    await inboxPage.waitForPageToLoadUrl(inboxRepliesUrl);
    const pageTitle = await inboxPage.getTitle();

    // Assert
    expect(pageTitle, 'Link replies working').toContain(exceptedPageTitle);

    await test.step('verify feedback button', async () => {
      // Arrange
      const exceptedPageTitle = 'Feedback';

      // Act
      inboxPage = await inboxPage.clickFeedbackButton();
      await inboxPage.waitForPageToLoadUrl();
      const pageFeedbackTitle = await inboxPage.getTitle();

      // Assert
      expect(pageFeedbackTitle, 'Link feedback working').toContain(exceptedPageTitle);
    });
  });
});
