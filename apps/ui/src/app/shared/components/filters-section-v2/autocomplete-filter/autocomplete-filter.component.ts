import { Component, Injector, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { AutocompleteType } from '@shared/components/filters-section-v2/filters.config';
import { ControlValueAccessorBase } from '@shared/utils/control-value-accessor-base';

@Component({
  selector: 'loop-autocomplete-filter',
  templateUrl: './autocomplete-filter.component.html',
  styleUrls: ['./autocomplete-filter.component.scss'],
})
export class AutocompleteFilterComponent extends ControlValueAccessorBase<string> {
  @Input() title: string;
  @Input() config: IFilterV2<any>;

  AutocompleteType = AutocompleteType;

  constructor(protected ngControl: NgControl, protected injector: Injector) {
    super(ngControl, injector);
  }

  onClearClicked(): void {
    this.control.reset();
  }
}
