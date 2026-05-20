import { expect, test } from '@_playwright-src/fixtures/merge.fixture';

test.describe('Verify main menu @smoke', () => {
  test('verify statistics menu button', async ({ mainMenuComponent }) => {
    // Arrange
    const exceptedPageTitle = 'Statistics';

    // Act
    const statisticsPage = await mainMenuComponent.clickStatisticsPageButton();
    await statisticsPage.waitForPageToLoadUrl();
    const pageTitle = await statisticsPage.getTitle();

    // Assert
    expect(pageTitle).toContain(exceptedPageTitle);

    await test.step('verify feedback menu button', async () => {
      // Arrange
      const exceptedPageTitle = 'Feedback';

      // Act
      await statisticsPage.goto();
      const feedbackPage = await mainMenuComponent.clickFeedbackPageButton();
      await feedbackPage.waitForPageToLoadUrl();
      const pageTitle = await feedbackPage.getTitle();

      // Assert
      expect(pageTitle).toContain(exceptedPageTitle);
    });
  });

  test('verify inbox menu button', async ({ mainMenuComponent }) => {
    // Arrange
    const exceptedPageTitle = 'Inbox';

    // Act
    const inboxPage = await mainMenuComponent.clickInboxPageButton();
    await inboxPage.waitForPageToLoadUrl();
    const pageTitle = await inboxPage.getTitle();

    // Assert
    expect(pageTitle).toContain(exceptedPageTitle);
  });

  test('verify outbox menu button', async ({ mainMenuComponent }) => {
    // Arrange
    const exceptedPageTitle = 'Outbox';

    // Act
    const outboxPage = await mainMenuComponent.clickOutboxPageButton();
    await outboxPage.waitForPageToLoadUrl();
    const pageTitle = await outboxPage.getTitle();

    // Assert
    expect(pageTitle).toContain(exceptedPageTitle);
  });
});
