import { mergeTests } from '@playwright/test';
import { provideFeedbackByAPITest } from '@_playwright-src/fixtures/api.fixture';
import { loginTest } from '@_playwright-src/fixtures/login.fixture';
import { mocksTest } from '@_playwright-src/fixtures/mocks.fixture';
import { pageObjectTest } from '@_playwright-src/fixtures/page-object.fixture';

export { expect } from '@playwright/test';

export const test = mergeTests(pageObjectTest, loginTest, mocksTest, provideFeedbackByAPITest);
