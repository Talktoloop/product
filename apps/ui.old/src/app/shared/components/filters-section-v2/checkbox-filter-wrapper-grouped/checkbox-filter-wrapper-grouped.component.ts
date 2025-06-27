import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { UIService } from '@core/services/ui/ui.service';
import { BaseComponent } from '@shared/components/base.component';
import { CheckboxListFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loop-checkbox-filter-wrapper-grouped',
  templateUrl: './checkbox-filter-wrapper-grouped.component.html',
  styleUrls: ['./checkbox-filter-wrapper-grouped.component.scss'],
})
export class CheckboxFilterWrapperGroupedComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() isModal: boolean;
  @Input() filterData: CheckboxListFilterData;
  @Input() form: UntypedFormGroup;
  @Input() controlName: string;
  @Input() reset$: Observable<boolean> = new BehaviorSubject<boolean>(true);
  @Input() nestedModalMode: boolean;
  @Input() isAllFiltersModal: boolean;
  @Output() totalSelectedChange = new EventEmitter<number>();
  @Output() groupDetailsClicked = new EventEmitter<boolean>();
  @Output() rootBackClicked = new EventEmitter<boolean>();
  @Output() seeAllClicked = new EventEmitter();

  selected = null;
  selectedInGroup = [];
  checkboxOptions = [];

  constructor(private cd: ChangeDetectorRef, public ui: UIService, private elementRef: ElementRef) {
    super();
  }

  ngOnInit(): void {
    this.reset$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.initData();
    });

    this.form
      .get(this.controlName)
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.refreshSelectedInGroups());
  }

  ngOnDestroy(): void {
    this.checkboxOptions.forEach((option) => (option.hidden = false));
  }

  parentClicked(event: Event, index: number): void {
    event.stopImmediatePropagation();
    event.preventDefault();
    this.selected = index;
    const parentId = this.filterData?.data[this.selected].code;
    this.checkboxOptions = this.checkboxOptions.map((option) => {
      if (option.parentId === parentId) {
        option.hidden = false;
      }
      return option;
    });
    this.groupDetailsClicked.emit(true);
    this.cd.detectChanges();
  }

  backClicked(event: Event): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    const parentId = this.filterData?.data[this.selected].code;
    this.checkboxOptions = this.checkboxOptions.map((option) => {
      if (option.parentId === parentId) {
        option.hidden = true;
      }
      return option;
    });
    this.refreshSelectedInGroups();
    this.selected = null;
    this.rootBackClicked.emit(true);
    this.cd.detectChanges();
    this.elementRef.nativeElement?.parent?.click();
  }

  refreshSelectedInGroups(): void {
    this.selectedInGroup = this.filterData?.data.reduce(
      (prev, next, currentIndex) => [
        ...prev,
        this.checkboxOptions.filter((option) => option.parentId === next.code && option.checked)?.length,
      ],
      [],
    );
    const totalSelected = this.selectedInGroup.reduce((p, c) => p + c);
    this.totalSelectedChange.emit(totalSelected);
  }

  private initData(): void {
    const children = this.filterData?.data.reduce((acc, area) => [...acc, ...area.children], []);
    const formValue: number[] = this.form.get(this.controlName).value;
    this.checkboxOptions = children.map((child) => ({ ...child, checked: formValue?.includes(Number(child.id)), hidden: !this.isModal }));
    this.refreshSelectedInGroups();
    this.rootBackClicked.emit(true);
    this.selected = null;
    this.cd.detectChanges();
  }

  handleBackButtonBlur(): void {
    const firstElementOfList = (document.getElementsByClassName('group-wrapper')[0]?.children?.[0] as HTMLElement)
      ?.children[0] as HTMLElement;
    firstElementOfList.focus();
    firstElementOfList.blur();
  }

  onSeeAllClicked(event: Event): void {
    event.stopImmediatePropagation();
    event.preventDefault();

    this.seeAllClicked.emit();
  }
}
