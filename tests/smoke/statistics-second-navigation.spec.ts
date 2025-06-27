import { expect, test } from '@_playwright-src/fixtures/merge.fixture';

test.describe('Verify second menu on Statistics page @smoke', () => {
  test('verify sensitive cases button', async ({ statisticsPage }) => {
    // Arrange
    const exceptedPageTitle = 'Sensitive cases';
    const sensitiveCasesUrl = 'statistics/sensitive-cases';

    // Act
    statisticsPage = await statisticsPage.clickSensitiveCasesButton();
    await statisticsPage.waitForPageToLoadUrl(sensitiveCasesUrl);
    const pageTitle = await statisticsPage.getTitle();

    // Assert
    expect(pageTitle, 'Link sensitive cases working').toContain(exceptedPageTitle);
  });

  test('verify open feedback button', async ({ statisticsPage }) => {
    // Arrange
    const exceptedPageTitle = 'Open feedback';

    // Act
    statisticsPage = await statisticsPage.clickOpenFeedbackButton();
    await statisticsPage.waitForPageToLoadUrl();
    const pageTitle = await statisticsPage.getTitle();

    // Assert
    expect(pageTitle, 'Link open feedback working').toContain(exceptedPageTitle);
  });
});
