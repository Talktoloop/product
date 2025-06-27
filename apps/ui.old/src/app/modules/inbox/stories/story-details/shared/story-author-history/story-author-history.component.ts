import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-author-history',
  templateUrl: './story-author-history.component.html',
  styleUrls: ['./story-author-history.component.scss']
})
export class StoryAuthorHistoryComponent {
  @Input() otherStoriesSameRecipient: { id: string, createdAt: Date, status: string }[];
}
