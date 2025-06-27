import { Component, EventEmitter, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { UIService } from '@app/core/services/ui/ui.service';
import { PaginationService } from '../pagination/pagination.service';

@Component({
  selector: 'app-items-per-page-select',
  templateUrl: './items-per-page-select.component.html',
  styleUrls: ['./items-per-page-select.component.scss'],
})
export class ItemsPerPageSelectComponent {
  dropDownOpen = false;
  control: UntypedFormControl = new UntypedFormControl();

  get itemsPerPage() {
    return this.paginationService.itemsPerPage;
  }

  get itemsPerPageValues() {
    return this.paginationService.itemsPerPageValues;
  }

  @Output()
  itemsPerPageChanged$ = new EventEmitter<string>();

  constructor(public ui: UIService, private paginationService: PaginationService) {}

  handleOutsideClick(): void {
    this.dropDownOpen = false;
  }

  handleOptionClick(value: string): void {
    this.control.setValue(value);
    this.dropDownOpen = false;
    this.itemsPerPageChanged$.emit(this.control.value);
  }

  handleSelectorOpenClick(): void {
    this.dropDownOpen = !this.dropDownOpen;
  }

  trackByFn(_, sort: string): string {
    return sort;
  }
}
