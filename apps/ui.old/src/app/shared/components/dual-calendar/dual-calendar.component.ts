import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateRange, MatCalendar, MatCalendarView } from '@angular/material/datepicker';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { LoopDateAdapter, MATERIAL_DATEPICKER_FORMATS } from './../../utils/loop-date-adapter.class';

@Component({
  selector: 'app-dual-calendar',
  templateUrl: './dual-calendar.component.html',
  styleUrls: ['./dual-calendar.component.scss'],
  providers: [
    LoopDateAdapter,
    {
      provide: DateAdapter,
      useExisting: forwardRef(() => LoopDateAdapter),
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MATERIAL_DATEPICKER_FORMATS },
    // TODO - add support for selection strategy for two calendars
    // { provide: MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: DefaultMatCalendarRangeStrategy },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DualCalendarComponent extends BaseComponent implements OnInit {
  @ViewChild('calendarOne', { static: false }) calendarOne: MatCalendar<Dayjs>;
  @ViewChild('calendarTwo', { static: false }) calendarTwo: MatCalendar<Dayjs>;
  @Input() form: UntypedFormGroup;
  @Input() controlName: string;
  @Input() refreshCalendars: Observable<boolean>;
  @Input() isModal = false;

  calendarOneDate: Dayjs;
  calendarTwoDate: Dayjs;

  manualDateForm: UntypedFormGroup;
  goToDateInViewPrevent = false;

  get dateControl(): AbstractControl {
    return this.form.get(this.controlName);
  }

  get selectedDate(): DateRange<Dayjs> {
    return new DateRange<Dayjs>(this.dateControl.value.from, this.dateControl.value.to);
  }

  get monthOneLabel(): string {
    return [this.translate.instant(`filtersV2.monthFull.${this.calendarOneDate.format('MMMM')}`), this.calendarOneDate.format('YYYY')].join(
      ' ',
    );
  }

  get monthTwoLabel(): string {
    return [this.translate.instant(`filtersV2.monthFull.${this.calendarTwoDate.format('MMMM')}`), this.calendarTwoDate.format('YYYY')].join(
      ' ',
    );
  }

  constructor(private readonly cd: ChangeDetectorRef, private readonly translate: TranslateService) {
    super();
  }

  ngOnInit(): void {
    this.calendarTwoDate = !!this.dateControl.value.from ? dayjs(this.dateControl.value.from) : dayjs();
    this.calendarOneDate = this.calendarTwoDate.clone().subtract(1, 'month');
    this.refreshCalendars.pipe(takeUntil(this.destroyed$)).subscribe(() => this.cd.detectChanges());
    this.dateControl.valueChanges
      .pipe(
        filter(() => !this.goToDateInViewPrevent),
        takeUntil(this.destroyed$),
      )
      .subscribe((values) => {
        let viewFrom: Dayjs;
        let viewTo: Dayjs;

        if (!Object.values(values).filter((v) => !!v).length) {
          this.dateControl.setValue({ from: null, to: null }, { emitEvent: false });

          return;
        }

        if (values.from) {
          viewFrom = dayjs(values.from).startOf('month');
          viewTo = dayjs(values.from).add(1, 'month');
          this.goToDateInView(viewFrom, viewTo);
        } else {
          viewTo = dayjs(values.to).startOf('month');
          viewFrom = dayjs(values.to).clone().add(-1, 'month');
          this.goToDateInView(viewFrom, viewTo);
        }

        this.cd.detectChanges();
      });
  }

  onSelect(date: Dayjs): void {
    this.goToDateInViewPrevent = true;

    if (this.dateControl.value.from && this.dateControl.value.to) {
      this.dateControl.setValue({ from: date.toISOString(), to: null });
    } else if (this.dateControl.value.from) {
      if (date.isBefore(this.dateControl.value.from)) {
        this.dateControl.setValue({ from: date.toISOString(), to: null });
      } else {
        this.dateControl.setValue({ from: this.dateControl.value.from, to: date.toISOString() });
      }
    } else {
      this.dateControl.setValue({ from: date.toISOString(), to: null });
    }

    this.goToDateInViewPrevent = false;
  }

  changeRange(value: number): void {
    const dateOne = this.calendarOneDate.add(value, 'month');
    const dateTwo = this.calendarTwoDate.add(value, 'month');

    this.goToDateInView(dateOne, dateTwo);
  }

  dateRangeLabel(rangePoint: 'from' | 'to'): string {
    const currentDateFrom = dayjs(this.dateControl.value[rangePoint]);

    return [
      currentDateFrom.format('DD'),
      this.translate.instant(`filtersV2.monthFull.${currentDateFrom.format('MMMM')}`),
      currentDateFrom.format('YYYY'),
    ].join(' ');
  }

  private goToDateInView(dateOne: Dayjs, dateTwo: Dayjs): void {
    this.calendarOneDate = dateOne;
    this.calendarTwoDate = dateTwo;
    this.calendarOne._goToDateInView(this.calendarOneDate, 'month');
    this.calendarTwo._goToDateInView(this.calendarTwoDate, 'month');
  }

  getDateClass(cellDate: Date, view: MatCalendarView): string {
    return view === 'month' ? (dayjs(cellDate).isAfter(dayjs()) ? 'date--day-after-today' : '') : '';
  }
}
