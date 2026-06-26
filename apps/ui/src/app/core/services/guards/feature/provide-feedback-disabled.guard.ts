import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { environment } from '@env/environment';

/**
 * Temporarily disables the "Submit feedback" (provide-feedback) flow.
 * Any attempt to open it — header button, mobile nav button, or a direct link —
 * is sent to the public landing page, which explains why feedback submission is
 * no longer available. Remove this guard from the route to re-enable the flow.
 */
@Injectable({
  providedIn: 'root',
})
export class ProvideFeedbackDisabledGuard implements CanActivate {
  canActivate(): boolean {
    window.location.href = environment.landingPageUrl;
    return false;
  }
}
