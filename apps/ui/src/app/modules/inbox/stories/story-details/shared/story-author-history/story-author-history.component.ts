import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-author-history',
  templateUrl: './story-author-history.component.html',
  styleUrls: ['./story-author-history.component.scss']
})
export class StoryAuthorHistoryComponent {
  @Input() otherStoriesSameRecipient: { id: string, createdAt: Date, status: string; url?: string }[];

  constructor(private router: Router) {}

  navigateToStory(url: string, event: Event): void {
    if (url) {
      event.preventDefault();
      event.stopPropagation();
      // Handle both relative and absolute URLs
      if (url.startsWith('http://') || url.startsWith('https://')) {
        window.location.href = url;
      } else {
        this.router.navigateByUrl(url);
      }
    }
  }
}
