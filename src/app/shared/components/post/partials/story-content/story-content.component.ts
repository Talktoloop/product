import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-content',
  templateUrl: './story-content.component.html',
  styleUrls: ['./story-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryContentComponent {
  @Output() readMoreClicked$ = new EventEmitter();
  @Input() storyId: string;
  @Input() content: string;
  @Input() limit: number;
  @Input() storyDetailsLink: string;

  get isLimit(): boolean {
    return this.limit && this.limit > 0;
  }

  get visibleContent(): string {
    const withNewLineIncludedContent = (this.content as string).replaceAll('\n', '<br>');
    return this.isLimit && withNewLineIncludedContent.length > this.limit
      ? `${withNewLineIncludedContent.slice(0, this.limit).trim()}...`
      : withNewLineIncludedContent;
  }

  get showReadMoreButton(): boolean {
    return this.isLimit && this.content.length > this.limit;
  }

  constructor(private router: Router) {}

  onReadMoreClick(event: Event): void {
    this.readMoreClicked$.next(event);
    event.stopImmediatePropagation();
    event.preventDefault();
    // prevents site reload
    this.router.navigateByUrl(this.storyDetailsLink);
  }
}
