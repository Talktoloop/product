import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import posthog from 'posthog-js';

@Injectable({
  providedIn: 'root',
})
export class PosthogService {
  private lastLocationHref: string;
  constructor() {
    posthog.init(environment.posthog_key, {
      api_host: environment.posthog_host, // Replace with your PostHog instance URL
      autocapture: true, // Enables automatic event tracking
    });
  }

  identifyUser(userId: string): void {
    posthog.identify(userId);
  }

  trackEvent(eventName: string, properties?: Record<string, any>): void {
    posthog.capture(eventName, properties);
  }

  trackPageView(): void {

    if (window.location.href == this.lastLocationHref) return
    this.lastLocationHref = window.location.href;
    posthog.capture('$pageview', {
      url: window.location.href,
    });
  }

  cleanObject(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      if (Array.isArray(value) && value.length === 0) {
        return acc;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        const cleaned = this.cleanObject(value);
        if (Object.keys(cleaned).length > 0) {
          acc[key] = cleaned;
        }
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
  }
}
