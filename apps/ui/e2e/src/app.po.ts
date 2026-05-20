import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHeadingText(): Promise<string> {
    return element(by.css('h1.landing-page__heading')).getText() as Promise<string>;
  }
}
