import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CHANNEL_CONSTANTS, TEXT_CHANNELS } from '@app/core/services/api/model/channel.enum';
import { StoriesService } from '../stories.service';
import { PaginationService } from './pagination.service';
import { SelectionService } from './selection.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() header = true;
  @Input() mobile: boolean;
  @Output() selectAllChanged = new EventEmitter<boolean>();
  @Output() rejectSelectedStories = new EventEmitter();
  @Output() assignSelectedStories = new EventEmitter();

  allSelected: boolean;
  channelType: string;
  selectedItemsLength: number;

  constructor(
    private paginationService: PaginationService,
    private storiesService: StoriesService,
    private selectionService: SelectionService,
  ) {}

  get totalItems() {
    return this.paginationService.totalItems;
  }

  get firstVisibleItemNumber() {
    const firstItem = 1;
    return firstItem + this.paginationService.itemsPerPage * (this.paginationService.currentPage - 1);
  }

  get lastVisibleItemNumber() {
    const maxLastVisibleItemNumber = this.paginationService.currentPage * this.paginationService.itemsPerPage;
    if (maxLastVisibleItemNumber <= this.paginationService.totalItems) {
      return maxLastVisibleItemNumber;
    }
    return this.paginationService.totalItems;
  }

  ngOnInit(): void {
    if (!this.header) {
      return;
    }
    this.selectionService.selectedItems$.subscribe((selectedItems) => {
      this.selectedItemsLength = selectedItems.length;
      const channelTypes = [...new Set(selectedItems.map((item) => item.channel))];
      if (channelTypes.length === 1 && channelTypes[0] === CHANNEL_CONSTANTS.IVRR) {
        this.channelType = channelTypes[0];
      } else if (channelTypes.length > 0 && channelTypes.every((channelType) => TEXT_CHANNELS.includes(channelType))) {
        this.channelType = CHANNEL_CONSTANTS.TEXT;
      } else {
        this.channelType = null;
      }

      this.selectionService.selectedChannel = this.channelType;
    });
  }

  onPreviousPageClicked() {
    if (this.paginationService.goToPreviousPage()) {
      this.storiesService.loadPage(this.paginationService.currentPage, this.paginationService.itemsPerPage);
    }
  }

  onNextPageClicked() {
    if (this.paginationService.goToNextPage()) {
      this.storiesService.loadPage(this.paginationService.currentPage, this.paginationService.itemsPerPage);
    }
  }

  onItemsPerPageChanged(value: number) {
    this.paginationService.setPreviousState();
    this.paginationService.itemsPerPage = value;
    this.storiesService.loadPage(this.paginationService.currentPage, this.paginationService.itemsPerPage);
  }

  onSelectAllChanged() {
    this.allSelected = !this.allSelected;
    this.selectAllChanged.emit(this.allSelected);
  }

  onRejectStories() {
    this.rejectSelectedStories.emit();
  }

  onAssignSelectedStories() {
    this.assignSelectedStories.emit();
  }
}
