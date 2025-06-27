import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-details-tabs',
  templateUrl: './story-details-tabs.component.html',
  styleUrls: ['./story-details-tabs.component.scss'],
})
export class StoryDetailsTabsComponent {
  selectedTab: string;

  get tabs(): string[] {
    return this._tabs;
  }

  @Input() set tabs(value: string[]) {
    this._tabs = value;
    if (value.length) {
      this.selectedTab = value[0];
    }
  }

  private _tabs: string[] = [];

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
