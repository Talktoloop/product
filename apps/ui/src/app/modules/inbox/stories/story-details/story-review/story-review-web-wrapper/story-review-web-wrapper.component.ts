import { Component } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';

@Component({
  selector: 'app-story-review-web-wrapper',
  templateUrl: './story-review-web-wrapper.component.html',
  styleUrls: ['./story-review-web-wrapper.component.scss'],
})
export class StoryReviewWebWrapperComponent {
  constructor(public ui: UIService) {}
}
