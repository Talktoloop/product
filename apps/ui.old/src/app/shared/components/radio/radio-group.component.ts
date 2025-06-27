import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioComponent } from '@shared/components/radio/radio.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RadioGroupComponent<T = any> implements AfterViewInit, ControlValueAccessor, OnDestroy {
  private static RadioGroupName = 0;
  public radioGroupId = `RadioGroup${RadioGroupComponent.RadioGroupName++}`;
  @HostBinding('role') private readonly role = 'radiogroup';
  @ContentChildren(forwardRef(() => RadioComponent), { descendants: true }) private _radios: QueryList<RadioComponent>;
  @Input() columns = 1;
  private onChange: (value: T) => void;
  private onTouch: () => void;
  private disabled: boolean;
  private destroy$ = new Subject();
  private templateChange$ = new Subject();
  private value: T;

  constructor() {
    RadioGroupComponent.RadioGroupName++;
  }

  ngAfterViewInit(): void {
    this._radios.forEach((radio) => {
      radio.name = this.radioGroupId;
      radio.cd.detectChanges();
    });
    this.subscribeToChanges(this._radios.toArray());

    this._radios.changes
      .pipe(takeUntil(this.destroy$))
      .subscribe((radios: QueryList<RadioComponent>) => this.subscribeToChanges(radios.toArray()));
  }

  ngOnDestroy(): void {
    this.templateChange$.next(null);
    this.templateChange$.complete();
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: T): void {
    this.value = obj;
    this.onChange?.(this.value);
    this.updateRadioButtonValues(this.value);
  }

  private subscribeToChanges(radios: RadioComponent[]): void {
    this.templateChange$.next(null);
    radios.forEach((radio) => {
      radio.changed.pipe(takeUntil(this.templateChange$)).subscribe((value) => this.writeValue(value));
    });
  }

  private updateRadioButtonValues(value: T): void {
    this._radios?.forEach((radio) => {
      radio.checked = radio.value === value;
      radio.cd.detectChanges();
    });
  }
}
