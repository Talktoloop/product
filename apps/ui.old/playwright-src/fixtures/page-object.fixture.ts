import { test as baseTest } from '@playwright/test';
import { MainMenuComponent } from '@_playwright-src/components/main-menu.component';
import { FeedbackPage } from '@_playwright-src/pages/feedback.pages';
import { InboxPage } from '@_playwright-src/pages/inbox.pages';
import { LoginPage } from '@_playwright-src/pages/login.pages';
import { OutboxPage } from '@_playwright-src/pages/outbox.pages';
import { ProvideFeedbackPage } from '@_playwright-src/pages/provide-feedback.pages';
import { StatisticsPage } from '@_playwright-src/pages/statistics.pages';
import { ReviewFeedbackView } from '@_playwright-src/views/review-feedback.view';
import { StoryDetailsView } from '@_playwright-src/views/story-details.view';

interface Pages {
  statisticsPage: StatisticsPage;
  outboxPage: OutboxPage;
  feedbackPage: FeedbackPage;
  inboxPage: InboxPage;
  mainMenuComponent: MainMenuComponent;
  loginPage: LoginPage;
  provideFeedbackPage: ProvideFeedbackPage;
  reviewFeedbackView: ReviewFeedbackView;
  storyDetailsView: StoryDetailsView;
}

export const pageObjectTest = baseTest.extend<Pages>({
  statisticsPage: async ({ page }, use) => {
    const statisticsPage = new StatisticsPage(page);
    await statisticsPage.goto();
    await use(statisticsPage);
  },
  reviewFeedbackView: async ({ page }, use) => {
    const reviewFeedbackView = new ReviewFeedbackView(page);
    await use(reviewFeedbackView);
  },
  storyDetailsView: async ({ page }, use) => {
    const storyDetailsView = new StoryDetailsView(page);
    await use(storyDetailsView);
  },
  provideFeedbackPage: async ({ page }, use) => {
    const provideFeedbackPage = new ProvideFeedbackPage(page);
    await provideFeedbackPage.goto();
    await provideFeedbackPage.closeModal();
    await use(provideFeedbackPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  outboxPage: async ({ page }, use) => {
    const outboxPage = new OutboxPage(page);
    await outboxPage.goto();
    await use(outboxPage);
  },
  feedbackPage: async ({ page }, use) => {
    const feedbackPage = new FeedbackPage(page);
    await feedbackPage.goto();
    await use(feedbackPage);
  },
  inboxPage: async ({ page }, use) => {
    const inboxPage = new InboxPage(page);
    await inboxPage.goto();
    await use(inboxPage);
  },
  mainMenuComponent: async ({ page, feedbackPage }, use) => {
    const mainMenuComponent = new MainMenuComponent(page);
    await feedbackPage.goto();
    await use(mainMenuComponent);
  },
});
