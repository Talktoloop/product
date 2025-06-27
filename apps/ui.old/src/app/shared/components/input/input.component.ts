import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { FormHelperService } from '@shared/services/form-helper.service';
import { ControlValueAccessorBase } from '@shared/utils/control-value-accessor-base';
import { removeMultipleWhitespaces } from '@shared/utils/forms.utils';
import { Observable } from 'rxjs';

type InputMode = 'v1' | 'v2';
@Component({
  selector: 'loop-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent extends ControlValueAccessorBase<string | number> implements OnInit {
  static Id = 0;
  @ViewChild('inputRef') inputRef: ElementRef<HTMLElement>;
  @Input() id: string;
  @Input() showCloseIcon: boolean;
  @Input() type = 'text';
  @Input() inputmode = 'text';
  @Input() autocomplete: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() placeholder = '';
  @Input() solidPlaceholder: boolean;
  @Input() showClearBtn: boolean;
  @Input() mode: InputMode;
  @Input() small: boolean;
  @Input() maxLength: number | null = null;
  @Input() minlength: number | null = null;
  @Input() min: number = null; // For input type number
  @Input() max: number = null; // For input type number
  @Input() passwordVisibility = false;
  @Input() customErrorKeys: Map<string, string>;
  @Output() idSet = new EventEmitter<string>();
  @Output() focused = new EventEmitter<Event>();
  @Output() clicked = new EventEmitter<Event>();
  @Output() clearClicked = new EventEmitter<Event>();
  @Output() focusedOut = new EventEmitter<Event>();
  @Output() keyPressed = new EventEmitter<KeyboardEvent>();
  isInputFocused: boolean;
  LoopIcon = LoopIcon;

  get errorMessage$(): Observable<string> {
    return this.formHelperService.getControlError(this.control, this.customErrorKeys);
  }

  get isInvalid(): boolean {
    return this.formHelperService.getIsInvalid(this.control);
  }

  constructor(
    private cd: ChangeDetectorRef,
    private formHelperService: FormHelperService,
    protected ngControl: NgControl,
    protected injector: Injector,
  ) {
    super(ngControl, injector);
  }

  ngOnInit(): void {
    if (!this.id) {
      this.setDefaultId();
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    this.keyPressed.emit(event);
  }

  onFocusOut(event: Event): void {
    this.isInputFocused = false;
    this.focusedOut.emit(event);
    this.cd.detectChanges();
  }

  onValueChange(value: string): void {
    if (this.type === 'number') {
      this.writeValue(value);
      this.onChange(value);
    } else {
      const trimmedValue = removeMultipleWhitespaces(value);
      this.writeValue(trimmedValue);
      this.onChange(trimmedValue);
    }
  }

  private setDefaultId(): void {
    this.id = `input${InputComponent.Id++}`;
    this.idSet.emit(this.id);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cd.detectChanges();
  }

  writeValue(value: string): void {
    this.value = value;
    this.cd.detectChanges();
  }

  handleFocus(event: Event): void {
    this.isInputFocused = true;
    this.focused.emit(event);
    this.cd.detectChanges();
  }

  handleClick(event: Event): void {
    this.clicked.emit(event);
  }

  focusInput(): void {
    this.inputRef?.nativeElement?.focus();
  }

  handleBlur(): void {
    this.onTouch?.();
  }

  onClearClick($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopImmediatePropagation();
    this.value = '';
    this.onChange('');
    this.clearClicked.emit($event);
  }

  isPassword(): boolean {
    return this.inputmode === 'password';
  }

  passwordVisibilityToogle(): void {
    this.passwordVisibility = !this.passwordVisibility;
    this.passwordVisibility ? (this.type = 'text') : (this.type = 'password');
  }
}
