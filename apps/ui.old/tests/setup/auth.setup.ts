import { test as setup } from '@_playwright-src/fixtures/merge.fixture';

setup('authenticate as admin @admin', async ({ loginAdmin }) => {
  loginAdmin;
});

setup('authenticate as user', async ({ loginUser }) => {
  loginUser;
});
