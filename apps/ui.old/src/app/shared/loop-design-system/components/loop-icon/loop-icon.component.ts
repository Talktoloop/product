import { Component, Input } from '@angular/core';
import LoopIcon from '@shared/loop-design-system/components/loop-icon/index';

@Component({
  selector: 'loop-icon',
  templateUrl: './loop-icon.component.html',
  styleUrls: ['./loop-icon.component.scss'],
})
export class LoopIconComponent {
  @Input() name: LoopIcon.Name;
  @Input() size?: number;
  @Input() theme?: LoopIcon.Theme;
  @Input() isDisabled?: boolean;
  @Input() isButton: boolean;
  @Input() isThemeReverted: boolean;
  @Input() clickable: boolean;
  @Input() dark: boolean;

  getClasses(): string {
    return `loop-icon-${this.name} theme-${this.theme}${this.isThemeReverted ? '-reverted' : ''} ${this.isButton ? 'button' : ''}  ${this.clickable ? 'clickable' : ''
      }`;
  }
}
