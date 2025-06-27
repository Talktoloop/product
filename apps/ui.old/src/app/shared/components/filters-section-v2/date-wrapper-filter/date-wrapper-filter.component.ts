import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseComponent } from '@shared/components/base.component';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

dayjs.extend(customParseFormat);

@Component({
  selector: 'loop-date-wrapper-filter',
  templateUrl: './date-wrapper-filter.component.html',
  styleUrls: ['./date-wrapper-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateWrapperFilterComponent extends BaseComponent implements OnInit {
  @Input() form: UntypedFormGroup;
  @Input() controlName: string;
  @Input() isModal: boolean;
  @Input() isAllFiltersModal: boolean;
  @Input() nestedModalMode: boolean;
  @Input() title: string;
  @Input() isCases: boolean;
  @Output() seeAllClicked = new EventEmitter();

  refreshCalendars$ = new Subject<boolean>();
  manualDateForm: UntypedFormGroup;
  isManual = false;

  get dateControl(): AbstractControl {
    return this.form.get(this.controlName);
  }

  constructor(private readonly fb: UntypedFormBuilder, public cd: ChangeDetectorRef, public ui: UIService) {
    super();
  }

  ngOnInit(): void {
    this.initManualDateForm();
    this.manualDateForm.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((values) => {
      if (values.from && this.manualDateForm.get('from').valid) {
        this.dateControl.setValue(
          { from: dayjs(values.from, 'DD/MM/YYYY').toISOString(), to: this.dateControl.value.to },
          { emitEvent: false },
        );
      }

      if (values.to && this.manualDateForm.get('to').valid) {
        this.dateControl.setValue(
          { from: this.dateControl.value.from, to: dayjs(values.to, 'DD/MM/YYYY').toISOString() },
          { emitEvent: false },
        );
      }
    });

    this.dateControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((values) => {
      if (values.from) {
        this.manualDateForm.get('from').setValue(dayjs(values.from).format('DD/MM/YYYY'), { emitEvent: false });
      }
      if (values.to) {
        this.manualDateForm.get('to').setValue(dayjs(values.to).format('DD/MM/YYYY'), { emitEvent: false });
      }
    });
  }

  onSeeAllClicked(event: Event): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.seeAllClicked.emit();
  }

  private initManualDateForm(): void {
    this.manualDateForm = this.fb.group({
      from: this.fb.control(this.dateControl.value.from ? dayjs(this.dateControl.value.from).format('DD/MM/YYYY') : '', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)],
      }),
      to: this.fb.control(this.dateControl.value.to ? dayjs(this.dateControl.value.to).format('DD/MM/YYYY') : '', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)],
      }),
    });
  }

  onClearClicked(): void {
    this.dateControl.setValue({ from: '', to: '' });
    this.manualDateForm.setValue({ from: '', to: '' });
    this.refreshCalendars$.next(null);
  }
}
