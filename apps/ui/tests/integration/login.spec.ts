import { getRandomUserEmail } from '@_playwright-src/factories/user.factory';
import { expect, test } from '@_playwright-src/fixtures/merge.fixture';

test.describe('Verify login', () => {
  test('login with correct credentials @LOOP_R01_01 @LOOP_R01_02', async ({ loginPage }) => {
    // Arrange
    const exceptedEmailResendTextIsDisplayed = 'Resend mail (';
    const userEmailData = getRandomUserEmail();

    // Act
    await loginPage.loginWithEmail(userEmailData);
    const magicLinkSend = loginPage.getEmailSendWithSuccess();

    // Assert
    await expect.soft(magicLinkSend.title, 'Email send with success').toBeVisible();
    await expect(magicLinkSend.email, 'Email data is displayed').toBeVisible();
    expect(await magicLinkSend.link.textContent()).toContain(exceptedEmailResendTextIsDisplayed);

    await test.step('verify continue without an account button', async () => {
      // Arrange
      const expectedPageTitle = 'Feedback';

      // Act
      const feedbackPage = await loginPage.clickContinueWithoutAccountButton();
      await feedbackPage.waitForPageToLoadUrl();
      const pageTitle = await feedbackPage.getTitle();

      expect(pageTitle).toContain(expectedPageTitle);
    });
  });

  test('reject login with incorrect email @LOOP_R01_03', async ({ loginPage }) => {
    // Arrange
    const incorrectEmailData = 'email@@@email';

    // Act
    await loginPage.loginWithEmail({ email: incorrectEmailData });

    // Assert
    await expect(loginPage.invalidEmailError, 'Valid email is mandatory').toBeVisible();
  });
});
