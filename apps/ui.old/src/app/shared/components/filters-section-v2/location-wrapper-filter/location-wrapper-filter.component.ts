import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'loop-location-wrapper-filter',
  templateUrl: './location-wrapper-filter.component.html',
  styleUrls: ['./location-wrapper-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationWrapperFilterComponent {
  get form(): UntypedFormGroup {
    return this._form;
  }

  @Input() set form(value: UntypedFormGroup) {
    this._form = value;
  }
  @Input() title: string;
  @Input() isCases: boolean;
  private _form: UntypedFormGroup;
  @Input() countryControlName: string;
  @Input() locationControlName: string;
  @Input() isModal: boolean;
  @Input() lastLocationQuery: string;
  @Output() locationQueryChanged = new EventEmitter<string>();

  onClearClicked(): void {
    this.form.get(this.countryControlName).reset();
    this.form.get(this.locationControlName).reset();
  }
}
