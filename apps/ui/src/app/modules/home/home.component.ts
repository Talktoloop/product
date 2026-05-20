import { Component, OnInit, ViewChild } from '@angular/core';
import { FiltersService } from '@core/services/filters/filters.service';
import { UIService } from '@core/services/ui/ui.service';
import { BaseComponent } from '@shared/components/base.component';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { StoriesFilters } from '@shared/components/filters-section-v2/filters.config';
import { prepareStoriesFilterData } from '@shared/utils/filters.utils';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home.service';
import { ActivatedRoute } from '@angular/router';
import { ListComponent } from '@app/shared/components/list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
  listInitialized = false;
  getLastStory = false;
  targetStoryId: string;
  filtersConfig$ = new BehaviorSubject<IFilterV2<StoriesFilters>[]>(null);
  @ViewChild(ListComponent) listComponent: ListComponent;
  constructor(public ui: UIService,
    private filtersService: FiltersService,
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService) {
    super();
  }

  ngOnInit(): void {

    prepareStoriesFilterData(this.destroyed$, this.filtersService, this.filtersConfig$);
    this.homeService.resetState();
  }

  listLoaded(): void {
    setTimeout(() => {
      this.listInitialized = true;

      this.getLastStory = !!this.activatedRoute.snapshot.queryParams['goBack'];
      if (this.getLastStory) {
        this.targetStoryId = this.homeService.lastStoryOpened$.getValue()?.storyId;
        this.listComponent.scrollToStory(this.targetStoryId);
      }

    });
  }
}
