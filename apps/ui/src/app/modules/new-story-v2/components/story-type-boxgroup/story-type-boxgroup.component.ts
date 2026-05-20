import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { ICategory } from '@app/core/services/api/model/response/get-categories.model';
import { StoryTypeModalComponent } from '@app/modules/new-story-v2/modals/story-type-modal/story-type-modal.component';
import { IBaseEntity } from '@core/services/api/model/response/base-entity.model';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { BaseComponent } from '@shared/components/base.component';
import { CheckboxEvent } from '@shared/components/checkbox/checkbox.component';
import { DIFFICULTY_MAPPING, DIFFICULTY_TRANSLATE_MAPPING } from '@shared/types/difficulty.type';
import { StoryCategoryMapping } from '@shared/types/story-category.type';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loop-story-type-boxgroup',
  templateUrl: './story-type-boxgroup.component.html',
  styleUrls: ['./story-type-boxgroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => StoryTypeBoxgroupComponent),
    },
  ],
})
export class StoryTypeBoxgroupComponent extends BaseComponent implements OnInit, OnChanges, ControlValueAccessor {
  checked = false;
  @Input() clearWhen = false; // Clear FormArray when true
  @Input() label: string;
  @Input() storyInfoMode: boolean;
  @Input() difficultiesMode: boolean;
  @Input() difficulties: IBaseEntity[];
  categories: ICategory[];
  StoryCategoryMapping = StoryCategoryMapping;
  DifficultiesTranslateMapping = DIFFICULTY_TRANSLATE_MAPPING;
  DifficultiesMapping = DIFFICULTY_MAPPING;

  formArray = new UntypedFormArray([]);
  onChange: (value: number[]) => void;
  onTouched: () => void;
  disabled: boolean;

  get categoriesForView(): ICategory[] {
    return this.storyInfoMode ? this.activeCategories : this.difficultiesMode ? this.difficultiesCategories : this.categories;
  }

  get difficultiesCategories(): ICategory[] {
    return this.difficulties ? this.prepareDifficultiesArr(this.difficulties) : [];
  }

  get activeCategories(): ICategory[] {
    const checkedTypes: number[] = this.formArray.value;
    return this.categories.filter((c) => checkedTypes.includes(Number(c.id)));
  }

  constructor(public metaDataService: MetaDataService, private cd: ChangeDetectorRef, private modalService: ModalServiceV2) {
    super();
  }

  ngOnInit(): void {
    this.metaDataService.categories$.pipe(take(1), takeUntil(this.destroyed$)).subscribe((v) => {
      this.categories = v;
      this.cd.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.clearWhen) {
      this.noneClicked();
    }
  }

  onCheckboxChange(event: CheckboxEvent): void {
    if (event.checked) {
      this.formArray.push(new UntypedFormControl(event.value));
      this.onChange(this.formArray.value);
      this.cd.markForCheck();
    } else {
      this.formArray.controls.forEach((item: UntypedFormControl, index: number) => {
        if (item.value === event.value) {
          this.formArray.removeAt(index);
          this.onChange(this.formArray.value);
          this.cd.markForCheck();
          return;
        }
      });
    }
  }

  noneClicked(): void {
    this.formArray.clear();
    this.onChange?.(null);
  }

  isChecked(id: string): boolean {
    return this.formArray.value.indexOf(Number(id)) !== -1;
  }

  isNoneChecked(): boolean {
    return !this.formArray.value?.length;
  }

  trackByFn(_, item: ICategory): string {
    return item.id;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(values: number[]): void {
    const controls: AbstractControl[] = [];
    values?.length && values.forEach((v) => controls.push(new UntypedFormControl(v)));
    this.formArray.controls = controls;
    this.formArray.updateValueAndValidity();
    this.cd.detectChanges();
  }

  onModalOpen(): void {
    this.modalService.open(StoryTypeModalComponent);
  }

  private prepareDifficultiesArr(difficulties: IBaseEntity[]): ICategory[] {
    return this.setDifficultiesArrOrder(difficulties) as ICategory[];
  }

  private setDifficultiesArrOrder(difficulties: IBaseEntity[]): ICategory[] {
    const orderByDifficultyId = [1, 2, 6, 3, 4, 5, 7, 8];
    return orderByDifficultyId.map(
      (id) => ({ ...difficulties.find((d) => Number(d.id) === id), code: DIFFICULTY_TRANSLATE_MAPPING[id] } as ICategory),
    );
  }
}
