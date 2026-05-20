import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api/api-base';
import { endpoints } from '@app/core/services/api/endpoints';
import { IAdministative, IAdministativeSearch, IAdministativeSearchItem, ICountry } from '@app/core/services/api/model/location.model';
import { IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

export const COUNTRIES_EXTENSIONS = {
  PHI: 'country.philipinnes',
  ZMB: 'country.zambia',
  OTH: 'country.other',
};

@Injectable({ providedIn: 'root' })
export class CountriesService extends ApiService {
  private countriesWithStories$: ReplaySubject<ICountry[]>;
  private countriesAll$: ReplaySubject<ICountry[]>;
  private searchAdministrativeData$: ReplaySubject<IAdministativeSearch[]>;

  constructor(private translate: TranslateService, private http: HttpClient) {
    super();
  }

  countriesModel(): IBaseEntityDN[] {
    const countriesArray = [];
    Object.keys(COUNTRIES_EXTENSIONS).forEach((key, index) => {
      countriesArray.push({
        code: COUNTRIES_EXTENSIONS[key],
        content: this.translate.instant(COUNTRIES_EXTENSIONS[key]),
        id: key,
        selected: !index,
      });
    });

    return countriesArray;
  }

  //TODO Temporary HotFix
  //Added second collection and function with suffix T
  getCountries(onlyWithStory?: boolean): Observable<ICountry[]> {
    if (onlyWithStory) {
      if (this.countriesWithStories$) {
        return this.countriesWithStories$;
      }
      this.countriesWithStories$ = this.getCountriesT(onlyWithStory);
      return this.countriesWithStories$.asObservable();
    } else {
      if (this.countriesAll$) {
        return this.countriesAll$;
      }
      this.countriesAll$ = this.getCountriesT(onlyWithStory);
      return this.countriesAll$.asObservable();
    }
  }

  private getCountriesT(onlyWithStory?: boolean): ReplaySubject<ICountry[]> {
    const params = new HttpParams({
      fromObject: {
        onlyWithStory,
      },
    });

    const countries$: ReplaySubject<ICountry[]> = new ReplaySubject(1);
    this.http
      .get<ICountry[]>(this.getRequestUrl(endpoints.getCountriesWithPhonePrefix), {
        params,
      })
      .pipe(take(1))
      .subscribe((countries) => countries$.next(countries));
    return countries$;
  }

  getAdministrativeData(countryId: number, onlyWithStory: boolean, parentId?: number): Observable<IAdministative[]> {
    const httpParams = new HttpParams({
      fromObject: {
        countryId: countryId,
        onlyWithStory: onlyWithStory,
        ...(parentId && { parentId: parentId }),
      },
    });

    return this.http.get<IAdministative[]>(this.getRequestUrl(endpoints.getAdministrativeData), {
      params: httpParams,
    });
  }

  getRegionPath(regionId): Observable<{ path: string }> {
    return this.http.get<{ path: string }>(this.getRequestUrl(endpoints.getAdministrativeRegionIdPath, { '${id}': regionId }));
  }

  searchAdministrativeData(
    countryId: number,
    phrase: string,
    parentId?: number,
    onlyWithStory?: boolean,
  ): Observable<IAdministativeSearchItem[]> {
    const httpParams = new HttpParams({
      fromObject: {
        countryId: countryId,
        phrase: phrase,
        onlyWithStory: onlyWithStory,
        ...(parentId && { parentId: parentId }),
      },
    });

    return this.http
      .get<IAdministativeSearch>(this.getRequestUrl(endpoints.searchAdministrativeData), {
        params: httpParams,
      })
      .pipe(
        take(1),
        map((data) => data.items),
      );
  }
}
