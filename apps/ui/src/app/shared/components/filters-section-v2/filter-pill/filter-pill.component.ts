import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';

import { AbstractControl } from '@angular/forms';

import { FiltersService } from '@app/core/services/filters/filters.service';

import { FilterType, IFilterV2 } from '@shared/components/filters-section-v2/filter.model';

import {
  CheckboxFilterData,
  CheckboxListFilterData,
  CheckboxTabsFilterData,
} from '@shared/components/filters-section-v2/filters-controls-data.model';

import { checkIfHasValue } from '@shared/utils/object.utils';

import { Subject, timer } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import { MultiRegionData, RegionData } from '@shared/components/location/location.component';
import { PlacePipe } from '@shared/pipes/place.pipe';
import { PillComponent } from '../../pills/pill/pill.component';

@Component({
  providers: [PlacePipe],
  selector: 'loop-filter-pill',
  templateUrl: './filter-pill.component.html',
  styleUrls: ['./filter-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPillComponent extends PillComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  @Input() config: IFilterV2<any>;
  @Input() customContent = false;
  @Input() visible = true;
  @Input() liveCounter = false;
  @Input() formData: AbstractControl;
  forcedTitle: string;
  currentValue = 0;

  @HostBinding('class.invisible') get isInvisible(): boolean {
    return !this.visible;
  }

  get internalName(): string {
    return this.config?.internalName;
  }

  nativeElementRef: HTMLElement;

  constructor(private el: ElementRef, private cd: ChangeDetectorRef, private filtersService: FiltersService) {
    super();
  }

  ngOnInit(): void {
    this.nativeElementRef = this.el.nativeElement;
    if (this.liveCounter) {
      this.refreshBadge();
      this.filtersService.filtersChanged$.pipe(takeUntil(this.destroyed$)).subscribe((v) => {
        this.cd.detectChanges();
        timer(1)
          .pipe(takeUntil(this.destroyed$))
          .subscribe(() => this.refreshBadge());
      });
    }
  }

  private refreshBadge(): void {
    this.currentValue = this.getFilterValue();
    this.badge = this.currentValue || null;

    if (this.config.type === FilterType.REGION) {
      this.forcedTitle = this.getPillTranslation(this.formData.value, this.config);
      const regionForm: MultiRegionData = this.formData.value;
      this.badge = regionForm?.selectedRegionsOrCountries?.length;
    } else if (this.currentValue === 1 && !this.config.noSingleValueTitle) {
      const element = this.findFirst(this.formData.value);
      this.badge = null;
      this.forcedTitle = this.getPillTranslation(element, this.config);
    } else {
      this.forcedTitle = null;
    }
    this.cd.detectChanges();
  }

  getFilterValue(): number {
    const control = this.formData;

    if (!control?.value && control.value !== 0) {
      return 0;
    }

    if (this.config.countValueAsOne && checkIfHasValue(control.value)) {
      return 1;
    }

    if (Array.isArray(control.value)) {
      return control.value.length;
    }

    if (typeof control.value === 'object') {
      let sum = 0;

      Object.keys(control.value).forEach((k) => {
        if (Array.isArray(control.value[k])) {
          sum += control.value[k].length;
        } else {
          !!control.value[k] && (sum += 1);
        }
      });

      return sum;
    }

    return 1;
  }

  findFirst(obj: any): INamedPill {
    if (Array.isArray(obj)) {
      return { group: this.internalName, value: obj[0] };
    }

    if (typeof obj === 'object') {
      for (const k of Object.keys(obj)) {
        if (Array.isArray(obj[k])) {
          return { group: k, value: obj[k][0] };
        } else if (obj[k] !== null) {
          return { group: k, value: obj[k] };
        }
      }
    }
    return { group: this.internalName, value: obj };
  }

  getPillTranslation(payload: INamedPill, config: IFilterV2<any>): string {
    switch (config.type) {
      case FilterType.CHECKBOX:
        return (config.data as CheckboxFilterData).data.find((singleData) => singleData.id == payload.value)?.code;
      case FilterType.CHECKBOX_TABS:
        return (config.data as CheckboxTabsFilterData)
          .find((tab) => tab.controlName === payload.group)
          ?.data.find((singleData) => singleData.id.toString() === payload.value.toString())?.code;
      case FilterType.CHECKBOX_LIST:
        for (const parentData of (config.data as CheckboxListFilterData).data) {
          for (const childData of parentData.children) {
            if (Number(childData.id) === payload.value) {
              return childData.code;
            }
          }
        }
        return null;
      case FilterType.AUTOCOMPLETE:
        return this.prepareAutocompleteSingleValue(config, payload);
      case FilterType.ORGANISATION:
          return this.prepareAutocompleteSingleValue(config, payload);
      case FilterType.DOUBLE_AUTOCOMPLETE:
        if (config.singleValueTitlePrefix) {
          return Object.keys(config.singleValueTitlePrefix).reduce(
            (prev, next) => (next === payload.group ? `${config.singleValueTitlePrefix[next]}${payload.value}` : prev),
            '',
          );
        }
        return null;
      case FilterType.REGION:
        const data = payload as unknown as RegionData;
        if (!data) {
          return null;
        }
    }
  }

  private prepareAutocompleteSingleValue(config: IFilterV2<any>, payload: INamedPill): string {
    if (config.findSingleValueInData) {
      return config.findSingleValueInData(config.data, payload.value);
    }
    return config.singleValueTitlePrefix ? `${config.singleValueTitlePrefix}${payload.value}` : payload.value.toString();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}

interface INamedPill {
  group: string;
  value: number | string;
}
