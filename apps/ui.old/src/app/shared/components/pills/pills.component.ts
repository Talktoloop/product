import { ChangeDetectionStrategy, Component, ViewEncapsulation,
  Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PillsComponent implements OnDestroy {
  @Input() gap: 'medium' | null = null;
  @Input() filters: number;
  @Input() isPillsVisible = false;
  @Output() pillsVisibleChange = new EventEmitter<boolean>();
  @Output() searchSubmitted = new EventEmitter<string>();
  @Input() set searchValue(value: string) {
    this._searchValue = value || '';
  }

  get searchValue(): string {
    return this._searchValue;
  }

  private _searchValue = '';
  private isSubmitting = false;
  private submitTimeout: any;

  toggleDropdown(): void {
    this.isPillsVisible = !this.isPillsVisible;
    this.pillsVisibleChange.emit(this.isPillsVisible);
  }

  get activeFiltersCount(): number {
    return this.filters;
  }

  handleSearchChange(newValue: string): void {
    this.searchValue = newValue;
  }

  submitSearch(): void {
    if (this.searchValue.length > 255) {
      this.searchValue = '';
      return;
    }

    if (!this.isSubmitting) {
      this.isSubmitting = true;
      this.searchSubmitted.emit(this.searchValue);

      this.submitTimeout = setTimeout(() => {
        this.isSubmitting = false;
      }, 900);
    }
  }

  handleInputKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitSearch();
    }
  }

  ngOnDestroy(): void {
    if (this.submitTimeout) {
      clearTimeout(this.submitTimeout);
    }
  }
}
