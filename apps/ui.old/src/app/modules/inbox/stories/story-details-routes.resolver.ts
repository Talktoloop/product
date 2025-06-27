import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RouteStep } from '@app/shared/components/route-stepper/route-step.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StoryDetailsRoutesResolver implements Resolve<RouteStep[]> {
  constructor(private translateService: TranslateService) {}

  resolve(): Observable<RouteStep[]> {
    const steps: RouteStep[] = [
      {
        title: this.translateService.instant(`story.details.step.review`),
        path: ['./', 'review'],
      }
    ];

    return of(steps);
  }
}
