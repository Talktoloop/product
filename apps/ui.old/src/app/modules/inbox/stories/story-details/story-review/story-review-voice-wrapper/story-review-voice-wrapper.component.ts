import { Component } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';

@Component({
  selector: 'app-story-review-voice-wrapper',
  templateUrl: './story-review-voice-wrapper.component.html',
  styleUrls: ['./story-review-voice-wrapper.component.scss'],
})
export class StoryReviewVoiceWrapperComponent {
  constructor(public ui: UIService) {}
}
