import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pin-story',
  templateUrl: './pin-story.component.html',
  styleUrls: ['./pin-story.component.scss'],
})
export class PinStoryComponent {
  @Input() isStoryPinned: boolean;
}
