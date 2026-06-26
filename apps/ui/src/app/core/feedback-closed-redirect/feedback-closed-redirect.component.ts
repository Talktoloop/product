import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

/**
 * Temporary landing for the disabled "Submit feedback" (provide-feedback) flow.
 *
 * Routing any navigation to a real component (instead of a canActivate guard that
 * returns false) guarantees the redirect fires on client-side navigation too — a
 * guard returning false cancels the navigation and the window.location redirect can
 * be skipped on in-app clicks, only firing on a full page load/refresh.
 *
 * To re-enable the feature, restore the original provide-feedback route
 * (loadChildren -> NewStoryV2Module) and delete this component.
 */
@Component({
  selector: 'app-feedback-closed-redirect',
  standalone: true,
  template: '',
})
export class FeedbackClosedRedirectComponent implements OnInit {
  ngOnInit(): void {
    // Feedback submission is closed — send users to the public landing page,
    // which explains why it's no longer available.
    window.location.href = environment.landingPageUrl;
  }
}
