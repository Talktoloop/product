import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { IPostAuthorDate, IStoryPlace } from '@core/services/api/model/story.model';
import { TranslateService } from '@ngx-translate/core';
import { CountryPipe } from '@shared/pipes/country.pipe';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostDetailsHelperService {
  constructor(
    private translateService: TranslateService,
    @Inject(LOCALE_ID) private readonly locale: string,
    private countryPipe: CountryPipe,
  ) {}

  getAuthorUsername$(story: IPostAuthorDate): Observable<string> {
    const userName = story?.authorNickname;
    return userName ? of(userName) : this.translateService.get('global.Annonymous');
  }

  getPlace(story: IStoryPlace): string {
    return story?.place ? `${story?.place}, ${this.countryPipe.transform(story?.country)}` : this.countryPipe.transform(story?.country);
  }
}
