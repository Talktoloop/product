import { Injectable } from '@angular/core';
import { IBasePaginatedAPI } from '@app/core/services/api/model/response/base-paginated-api.model';

@Injectable()
export class PaginationService {
  currentPage = 1;
  itemsPerPage = null;
  totalItems: number;
  totalPages: number;
  itemCount: number;
  itemsPerPageValues = [10, 15, 20, 50];
  private previousCurrentPage: number;
  private previousItemsPerPage: number;
  private metaData;

  init(data: IBasePaginatedAPI) {
    this.metaData = data.meta;
    this.totalItems = data.meta.totalItems;
    this.totalPages = data.meta.totalPages;
    this.currentPage = data.meta.currentPage;
    this.itemsPerPage = data.meta.itemsPerPage;
    this.itemCount = this.itemCount;
  }

  restoreStateAfterError() {
    this.currentPage = this.previousCurrentPage ?? this.metaData.currentPage;
    this.itemsPerPage = this.previousItemsPerPage ?? this.metaData.itemsPerPage;
  }

  goToPreviousPage() {
    this.setPreviousState();
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      return true;
    }
    return false;
  }

  goToNextPage(): boolean {
    this.setPreviousState();
    if (this.currentPage + 1 <= this.totalPages) {
      this.currentPage += 1;
      return true;
    }
    return false;
  }

  setPreviousState() {
    this.previousCurrentPage = this.currentPage;
    this.previousItemsPerPage = this.itemsPerPage;
  }
}
