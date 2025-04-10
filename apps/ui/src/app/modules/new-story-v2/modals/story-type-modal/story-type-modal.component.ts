import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-story-type-modal',
  templateUrl: './story-type-modal.component.html',
  styleUrls: ['./story-type-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryTypeModalComponent extends ModalBase {
  sections = ['thanks', 'question', 'opinion', 'request', 'concern'];
}
