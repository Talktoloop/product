import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpvoteComponent {
  @Input() votes: number;
  @Input() voted: boolean;
  @Output() upvoteClicked = new EventEmitter<Event>();

  get ariaLabel(): string {
    return this.voted ? 'storiesList.aria.clickToUnvote' : 'storiesList.aria.clickToVote';
  }

  upvote($event: Event): void {
    this.upvoteClicked.emit($event);
  }
}
