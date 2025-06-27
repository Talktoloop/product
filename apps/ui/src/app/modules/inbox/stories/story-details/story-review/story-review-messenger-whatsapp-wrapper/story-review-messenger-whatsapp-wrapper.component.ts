import { Component } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';

@Component({
  selector: 'app-story-review-messenger-whatsapp-wrapper',
  templateUrl: './story-review-messenger-whatsapp-wrapper.component.html',
  styleUrls: ['./story-review-messenger-whatsapp-wrapper.component.scss'],
})
export class StoryReviewMessengerWhatsappWrapperComponent {
  constructor(public ui: UIService) {}
}
