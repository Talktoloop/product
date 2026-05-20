import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IOrganisation } from '@core/services/api/model/story.model';

@Component({
  selector: 'app-story-organisations',
  templateUrl: './story-organisations.component.html',
  styleUrls: ['./story-organisations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryOrganisationsComponent implements OnInit {
  @Input() organisations: IOrganisation[];
  @Input() limit: number;
  private isOpened = false;

  get showExtendButton(): boolean {
    return this.organisations.length > this.limit && !this.isOpened;
  }

  get visibleOrganisations(): IOrganisation[] {
    return this.isOpened ? this.organisations : this.organisations.slice(0, this.limit);
  }

  get notVisibleOrganisationsCount(): number {
    return this.organisations.length - this.limit;
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.limit === undefined) {
      this.isOpened = true;
    }
  }

  trackById<T extends { id: any }>(_, item: T): any {
    return item.id;
  }

  handleShowMoreClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.isOpened = true;
    this.cd.markForCheck();
  }
}
