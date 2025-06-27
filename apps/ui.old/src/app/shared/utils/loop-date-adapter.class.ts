import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as DayjsDateAdapter from '@vanrossumict/material-dayjs-adapter';

export const MATERIAL_DATEPICKER_FORMATS = {
  parse: {
    dateInput: 'DD/MMM/YYYY',
  },
  display: {
    dateInput: 'DD/MMM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MMM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Injectable()
export class LoopDateAdapter extends DayjsDateAdapter.ɵb {
  constructor(private readonly translate: TranslateService) {
    super('en');
  }

  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    return [
      this.translate.instant('filtersV2.weekdayShort.Sunday'),
      this.translate.instant('filtersV2.weekdayShort.Monday'),
      this.translate.instant('filtersV2.weekdayShort.Tuesday'),
      this.translate.instant('filtersV2.weekdayShort.Wednesday'),
      this.translate.instant('filtersV2.weekdayShort.Thursday'),
      this.translate.instant('filtersV2.weekdayShort.Friday'),
      this.translate.instant('filtersV2.weekdayShort.Saturday'),
    ].map((translation) => translation.slice(0, 2));
  }
}
