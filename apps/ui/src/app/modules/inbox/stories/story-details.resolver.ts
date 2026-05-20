import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { IBaseEntityN } from '@core/services/api/model/response/base-entity.model';
import { IGetThematicAPIExtended } from '@core/services/api/model/response/get-thematic.model';
import { IStory } from '@core/services/api/model/story.model';
import { StoryService } from '@core/services/api/story/story.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { combineLatest, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface StoryRouteData {
  story: IStory;
  organisations: IBaseEntityN[];
  thematics: IGetThematicAPIExtended[];
}

@Injectable()
export class StoryDetailsResolver implements Resolve<StoryRouteData> {
  constructor(
    private metaDataService: MetaDataService,
    private router: Router,
    private storyService: StoryService,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.parent.params['id'];
    const channel = route.parent.params['channel'] as CHANNEL_CONSTANTS;

    return combineLatest([
      this.storyService.getStoryModerator(id, channel),
      this.metaDataService.organisations$,
      this.metaDataService.thematicAreas$,
    ]).pipe(
      map(([story, organisations, thematics]) => ({ story, organisations, thematics })),
      catchError((error) => {
        this.toastr.error(
          this.translateService.instant(`story.toast.errors.failedToLoad`),
          this.translateService.instant('story.toast.errors.failedToLoadSubtitle'),
        );

        this.router.navigate([MAIN_ROUTES.INBOX, INBOX_ROUTES.STORIES]);
        return throwError(error);
      }),
    );
  }
}
