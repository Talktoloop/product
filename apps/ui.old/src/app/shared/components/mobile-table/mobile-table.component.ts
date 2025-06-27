import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { InboxTable } from '@app/modules/inbox/shared/inbox-table.model';
import { MobileCellDirective } from './mobile-cell.directive';
import { MobileTableAction, MobileTableActionCallback, MobileTableDataRow } from './mobile-table.model';

@Component({
  selector: 'app-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.scss'],
})
export class MobileTableComponent<T> {
  @Input() showCustomActions = true;
  @Input() noPadding = false;
  @Input()
  list: MobileTableDataRow<T>[];

  @Input()
  columns: InboxTable[] = [];

  @Input()
  actions: MobileTableAction<T>[] = [];

  @Input()
  itemsInRow = 1;

  @Input()
  additionalRowClassCondition: (row: T) => string;

  @Output()
  actionClick: EventEmitter<MobileTableActionCallback<T>> = new EventEmitter();

  @Output()
  itemClick: EventEmitter<T> = new EventEmitter();

  @ContentChildren(MobileCellDirective, { descendants: false })
  cells: QueryList<MobileCellDirective>;

  getColumnFlexBasis(): string {
    return `${100 / this.itemsInRow}%`;
  }

  onItemClick(element: T): void {
    this.itemClick.emit(element);
  }

  onActionClick(action: MobileTableAction<T>, element: T): void {
    this.actionClick.emit({
      action,
      element,
    });
  }
}
