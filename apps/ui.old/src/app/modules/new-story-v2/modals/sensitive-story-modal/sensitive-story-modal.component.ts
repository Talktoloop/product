import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-sensitive-story-modal',
  templateUrl: './sensitive-story-modal.component.html',
  styleUrls: ['./sensitive-story-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensitiveStoryModalComponent extends ModalBase {
  listOptions = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
}
