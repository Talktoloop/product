import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilterPillComponent } from '../filters-section-v2/filter-pill/filter-pill.component';

const ITEMS_GAP = 10;

@Directive({
  selector: '[appFlexibleFilters]',
})
export class FlexibleFiltersDirective implements OnInit, OnDestroy, AfterContentInit {
  @ContentChildren(FilterPillComponent) pills: QueryList<FilterPillComponent>;
  @ContentChild('showMorePill') showMorePill: FilterPillComponent;
  @ContentChild('clearAllPill') clearAllPill: FilterPillComponent;
  @Input() showClearAll = true;
  @Input() redrawTrigger: Subject<boolean>;

  destroyed$ = new Subject();
  invisiblePills: Array<number> = [];

  @HostListener('window:resize')
  onResize(): void {
    this.calculateItemsAmount();
  }

  constructor(private readonly elementRef: ElementRef, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.redrawTrigger.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      // timeout provided to get rid of wrong width calculation (especially when changing from statistics open-stories to cases
      setTimeout(() => this.calculateItemsAmount(), 1);
    });
  }

  ngAfterContentInit(): void {
    setTimeout(() => this.calculateItemsAmount(), 1);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  calculateItemsAmount(): void {
    this.clearAllPill.visible = false;

    if (this.showClearAll) {
      this.clearAllPill.visible = true;
    }
    setTimeout(() => this.cd.markForCheck(), 1);
  }
}
