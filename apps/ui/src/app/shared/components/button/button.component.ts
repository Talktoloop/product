import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

type ButtonVariant =
  | 'primary'
  | 'primary-2'
  | 'secondary'
  | 'reject'
  | 'outlined'
  | 'danger'
  | 'destructive-outline'
  | 'link'
  | 'link-2'
  | 'link-3'
  | 'link-4'
  | 'link-5'
  | 'select-option'
  | 'tertiary'
  | 'tertiary-2';
type ButtonMode = 'v2';

// https://www.figma.com/file/Gnm02qT8lL1XEvtMFOR6RL/Loop-2021-Feature-Development?node-id=240%3A0
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() id: string;
  @Input() variant: ButtonVariant = 'primary';
  @Input() mode: ButtonMode;
  @Input() loading = false;
  @Input() disabled: boolean;
  @Input() noPadding = false;
  @Input() bigPadding = false;
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<Event>();
  @Output() blured = new EventEmitter<Event>();
  @Output() focused = new EventEmitter<Event>();
}
