import { expect, test } from '@_playwright-src/fixtures/merge.fixture';

test.describe('Verify second menu on Outbox page @smoke', () => {
  test('verify in-progress button', async ({ outboxPage }) => {
    // Arrange
    const exceptedPageTitle = 'In progress';
    const outboxProgressUrl = 'outbox/in-progress';

    // Act
    await outboxPage.inProgressButton.click();
    await outboxPage.waitForPageToLoadUrl(outboxProgressUrl);
    const pageTitle = await outboxPage.getTitle();

    // Assert
    expect(pageTitle, 'Link in-progress working').toContain(exceptedPageTitle);

    await test.step('verify pending recording button', async () => {
      // Arrange
      const exceptedPageTitle = 'Pending recording';

      // Act
      outboxPage = await outboxPage.clickPendingRecordingButton();
      await outboxPage.waitForPageToLoadUrl();
      const pageTitle = await outboxPage.getTitle();

      // Assert
      expect(pageTitle, 'Link pending recording working').toContain(exceptedPageTitle);
    });
  });
  test('verify buttons are disabled', async ({ outboxPage }) => {
    // Assert
    await expect(outboxPage.archiveDisabledButton, 'Button archive is disabled').toHaveAttribute('class', /blocked/);
  });
});
