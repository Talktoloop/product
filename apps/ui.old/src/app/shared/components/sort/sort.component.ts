import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { UIService } from '@app/core/services/ui/ui.service';

@Component({
  selector: 'loop-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent {
  dropDownOpen = false;
  sortControl: UntypedFormControl = new UntypedFormControl();

  @Input()
  sortElements: string[] = [];

  @Input() set activeSort(value: string) {
    this._activeSort = value;
    this.sortControl.setValue(value);
  }

  get activeSort(): string {
    return this._activeSort;
  }

  private _activeSort: string;

  @Output()
  sortChange$ = new EventEmitter<string>();

  constructor(public ui: UIService) {}

  handleOutsideClick(): void {
    this.dropDownOpen = false;
  }

  handleOptionClick(sort: string): void {
    this.sortControl.setValue(sort);
    this._activeSort = sort;
    this.dropDownOpen = false;
    this.sortChange$.emit(this.sortControl.value);
  }

  handleSelectorOpenClick(): void {
    this.dropDownOpen = !this.dropDownOpen;
  }

  trackByFn(_, sort: string): string {
    return sort;
  }
}
