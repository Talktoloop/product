import { Component, EventEmitter, Input, Output } from '@angular/core';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { SimpleTagTheme } from '../simple-tag-theme.enum';
import { TagSize } from '../tag-size.enum';

@Component({
  selector: 'loop-simple-tag',
  templateUrl: './simple-tag.component.html',
  styleUrls: ['./simple-tag.component.scss'],
})
export class SimpleTagComponent {
  LoopIcon = LoopIcon;

  @Input() text: string;
  @Input() country: string;
  @Input() tagSize: TagSize = TagSize.MEDIUM;
  @Input() tagTheme: SimpleTagTheme = SimpleTagTheme.LOOP;
  @Input() closeButton = false;
  @Input() disable = false;
  @Input() leftIcon = false;
  @Input() verified = false;
  @Output() close$ = new EventEmitter<void>();

  get isDisable(): string {
    return this.disable ? 'disable' : '';
  }

  get iconSize(): number {
    if (this.tagSize === TagSize.EXTRA_SMALL || this.tagSize === TagSize.SMALL) {
      return 12;
    } else {
      return 14;
    }
  }

  get iconTheme(): LoopIcon.Theme {
    if (this.tagTheme === SimpleTagTheme.LOOP) {
      return LoopIcon.Theme.Primary;
    } else if (this.tagTheme === SimpleTagTheme.ACTION) {
      return LoopIcon.Theme.Action;
    } else {
      return LoopIcon.Theme.Neutral;
    }
  }
}
