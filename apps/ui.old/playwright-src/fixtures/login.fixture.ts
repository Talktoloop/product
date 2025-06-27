import { pageObjectTest } from '@_playwright-src/fixtures/page-object.fixture';
import { imapConfigAdmin, imapConfigUser } from '@_playwright-src/imap-protocol';
import { loginAdminViaImap, loginUserViaImap } from '@_playwright-src/test-data/user.data';

interface Login {
  loginAdmin: void;
  loginUser: void;
}

export const loginTest = pageObjectTest.extend<Login>({
  loginAdmin: async ({ page, loginPage }, use) => {
    const loginAdmin = await loginPage.authenticateToApp(page, loginAdminViaImap, imapConfigAdmin);
    await use(loginAdmin);
  },
  loginUser: async ({ page, loginPage }, use) => {
    const loginUser = await loginPage.authenticateToApp(page, loginUserViaImap, imapConfigUser);
    await use(loginUser);
  },
});
