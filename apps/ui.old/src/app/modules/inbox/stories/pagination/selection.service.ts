import { Injectable } from '@angular/core';
import { IModeratorStoryBrief } from '@app/core/services/api/model/response/get-stories-moderator.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SelectionService {
  selectedItems$ = new BehaviorSubject<IModeratorStoryBrief[]>([]);
  private _selectedChannel: string;

  get selectedItems(): IModeratorStoryBrief[] {
    return this.selectedItems$.getValue();
  }

  get firstSelectedItem(): IModeratorStoryBrief {
    return this.selectedItems[0];
  }

  get selectedChannel(): string {
    return this._selectedChannel;
  }

  set selectedChannel(value: string) {
    this._selectedChannel = value;
  }

  changeSelection(item: IModeratorStoryBrief) {
    if (item.selected) {
      this.addSelectedItem(item);
    } else {
      this.removeSelectedItem(item);
    }
  }

  private addSelectedItem(item: IModeratorStoryBrief) {
    const newSelectedItemsList = [...this.selectedItems, item];
    this.selectedItems$.next(newSelectedItemsList);
  }

  private removeSelectedItem(item: IModeratorStoryBrief) {
    const newSelectedItemsList = this.selectedItems.filter((x) => x.id !== item.id);
    this.selectedItems$.next(newSelectedItemsList);
  }
}
