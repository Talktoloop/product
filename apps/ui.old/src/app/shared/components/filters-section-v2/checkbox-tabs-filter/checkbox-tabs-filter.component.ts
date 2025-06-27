import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { UIService } from '@core/services/ui/ui.service';
import { CheckboxTabsFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';
import { IFilterV2 } from '../filter.model';

@Component({
  selector: 'loop-checkbox-tabs-filter',
  templateUrl: './checkbox-tabs-filter.component.html',
  styleUrls: ['./checkbox-tabs-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxTabsFilterComponent {
  @Input() config: IFilterV2<keyof CheckboxTabsFilterData>;
  @Input() title: string;
  @Input() form: UntypedFormGroup;
  @Input() data: CheckboxTabsFilterData;
  @Input() isModal: boolean;
  @Input() isCases: boolean;
  @Input() isAllFiltersModal: boolean;
  @Input() nestedModalMode: string;
  @Output() seeAllClicked = new EventEmitter();
  @Output() totalSelectedChange = new EventEmitter<number>();

  get isNestedModalMode(): boolean {
    return this.nestedModalMode === this.config.internalName;
  }

  demographicDetailsCount = {
    age: 0,
    gender: 0,
    difficulty: 0,
    minority: 0,
  };

  constructor(public ui: UIService) {}

  onSeeAllClicked(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.seeAllClicked.emit();
  }

  selectionChanged(group: string, value: number): void {
    this.demographicDetailsCount[group] = value;
    this.totalSelectedChange.emit(
      this.demographicDetailsCount.age
      + this.demographicDetailsCount.gender
      + this.demographicDetailsCount.difficulty
      + this.demographicDetailsCount.minority,
    );
  }
}
