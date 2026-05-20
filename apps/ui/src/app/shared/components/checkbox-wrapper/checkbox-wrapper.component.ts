import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';
import { ControlValueAccessorBase } from '../../utils/control-value-accessor-base';
import { CheckboxEvent } from '../checkbox/checkbox.component';

@Component({
  selector: 'loop-checkbox-wrapper',
  templateUrl: './checkbox-wrapper.component.html',
  styleUrls: ['./checkbox-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxWrapperComponent extends ControlValueAccessorBase<number[] | number> {
  @Output() totalSelectedChange = new EventEmitter<number>();
  @Input() singleValue: boolean;
  @Input() isModal: boolean;
  @Input() strictTranslationCode = false;
  @Input() bulkActionVisible = true;
  @Input() wideStyle = false;
  @Input() flat = false;
  @Input() title: string;
  @Input() noTranslation: boolean;

  private _options: IBaseEntityDN[] = [];

  @Input() set options(value: IBaseEntityDN[]) {
    if (value) {
      this._options = [...value];
      this.prepareChecboxValuesAndEmitChange();
    }
  }

  get options(): IBaseEntityDN[] {
    return this._options;
  }

  formControl: UntypedFormControl;
  selectedOptions: number;

  constructor(protected ngControl: NgControl, private cd: ChangeDetectorRef, protected injector: Injector) {
    super(ngControl, injector);
  }

  allSelected(parentId = ''): boolean {
    return this.options
      .filter((option) => !option.hidden && (parentId === '' || parentId === option.parentId))
      .every((option) => option.checked);
  }

  onCheckboxClick(event: Event): void {
    event.stopImmediatePropagation();
  }

  onSelectAllClick(event: Event, parentId = ''): void {
    event.stopImmediatePropagation();
    const selected = this.allSelected(parentId);
    if (this.selectedOptions >= 1) {
      this.options
        .filter((opt) => !opt.hidden && (parentId === '' || parentId === opt.parentId) && opt.checked === true)
        .forEach((opt) => (opt.checked = false));
    } else {
      this.options
        .filter((opt) => !opt.hidden && (parentId === '' || parentId === opt.parentId))
        .forEach((opt) => (opt.checked = !selected));
    }
    this.prepareChecboxValuesAndEmitChange();
  }

  onCheckboxChanged(event: CheckboxEvent): void {
    const foundItemIndex = this.options.findIndex((option) => Number(option.id) === Number(event.value));
    let foundItem = this.options[foundItemIndex];

    if (this.singleValue) {
      foundItem = { ...this.options[foundItemIndex], checked: !foundItem.checked };
      this.options.forEach((option) => (option.checked = false));
      this.options[foundItemIndex] = foundItem;
    } else {
      foundItem.checked = !foundItem.checked;
    }

    if (this.options.every((option) => option.checked === false)) {
      this.selectedOptions = 0;
    }
    this.prepareChecboxValuesAndEmitChange();
  }

  writeValue(ids: number[]): void {
    if (!ids) {
      return;
    }
    const safeIds = ids.length ? ids : [];
    this.options?.forEach((option) => (option.checked = safeIds.includes(Number(option.id))));
    this.cd.detectChanges();
  }

  private prepareChecboxValuesAndEmitChange(): void {
    const filteredCheckboxes = this.prepareCheckboxValues();
    const selectedChangeValue = Array.isArray(filteredCheckboxes) ? filteredCheckboxes.length : filteredCheckboxes >= 0 ? 1 : 0;

    const onChangeValue = Array.isArray(filteredCheckboxes) ? (filteredCheckboxes.length ? filteredCheckboxes : null) : filteredCheckboxes;

    this.selectedOptions = selectedChangeValue;

    this.totalSelectedChange.emit(selectedChangeValue);
    this.onChange?.(onChangeValue);
  }

  private prepareCheckboxValues(): number[] {
    return this.options.filter((option) => option.checked).map((option) => Number(option.id));
  }
}
