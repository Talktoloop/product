import { Component, Input } from '@angular/core';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { RequiredTagState } from '../required-tag-state.enum';
import { TagSize } from '../tag-size.enum';

@Component({
  selector: 'loop-required-tag',
  templateUrl: './required-tag.component.html',
  styleUrls: ['./required-tag.component.scss'],
})
export class RequiredTagComponent {
  RequiredTagState = RequiredTagState;
  LoopIcon = LoopIcon;

  @Input() state: RequiredTagState = RequiredTagState.NEUTRAL;
  @Input() tagSize: TagSize = TagSize.MEDIUM;

  get iconSize(): number {
    if (this.tagSize === TagSize.EXTRA_SMALL || this.tagSize === TagSize.SMALL) {
      return 9;
    } else {
      return 12;
    }
  }
}
