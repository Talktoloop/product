import { Injectable } from '@angular/core';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { IGetStoriesFiltersAPI } from '@core/services/api/model/request/get-story.model';
import { ICasesFiltersData, IFiltersData } from '@core/services/filters/model/filters-data.model';
import { IGetStatisticsCasesFiltersAPI } from '@core/services/statistics/model/statistics-filters.model';
import { CountriesService } from '@shared/services/countries.service';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { IFilterEntity } from './model/filter-types.model';
import { SupportedLanguagesService } from '../locales/supported-languages.service';
import { IBaseEntityDN } from '../api/model/response/base-entity.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filtersDataV: IFiltersData;
  private casesFiltersDataV: ICasesFiltersData;
  queryParamsObject: { [p: string]: string };

  // Object prepared to send to API. Contains filters selected by user
  private userFiltersV: IGetStoriesFiltersAPI | IGetStatisticsCasesFiltersAPI;
  filterDismissed$ = new Subject<IFilterEntity>();
  currentStoriesCount = null;
  filtersChanged$ = new Subject<IGetStoriesFiltersAPI | IGetStatisticsCasesFiltersAPI>();
  redrawFiltersComp$ = new Subject();
  clearSearchInput$ = new Subject();
  searchChange$ = new Subject();
  lastSearch = '';

  constructor(private metaDataService: MetaDataService, private countriesService: CountriesService, private languageService: SupportedLanguagesService, private translateService: TranslateService) { }

  set userFilters(data: IGetStoriesFiltersAPI | IGetStatisticsCasesFiltersAPI) {
    this.userFiltersV = data;
    this.filtersChanged$.next(data);
  }

  get userFilters(): IGetStoriesFiltersAPI | IGetStatisticsCasesFiltersAPI {
    return this.userFiltersV;
  }

  get filtersData(): IFiltersData | null {
    return this.filtersDataV;
  }

  get casesFiltersData(): ICasesFiltersData | null {
    return this.casesFiltersDataV;
  }

  get casesFiltersData$(): Observable<ICasesFiltersData> {
    return combineLatest([
      this.metaDataService.referredForAssistance$,
      this.metaDataService.investigationOutcome$,
      this.metaDataService.organisationTypes$,
      this.metaDataService.caseTypes$,
      this.metaDataService.casesAges$,
      this.metaDataService.casesGender$,
      this.metaDataService.casesDifficulties$,
      this.metaDataService.casesThematic$,
    ]).pipe(
      map(
        ([referredForAssistance, investigationOutcome, organisationTypes, caseTypes, ages, genders, difficulties, thematic]) =>
        ({
          referredForAssistance,
          investigationOutcome,
          organisationType: organisationTypes,
          caseType: caseTypes,
          ages,
          genders,
          disability: difficulties,
          countries: this.countriesService.countriesModel(),
          thematic: thematic.map((tx) => {
            if (tx.children) {
              tx.children.sort((a, b) => {
                const nameA = String(this.translateService.instant(a.code) || a.code);
                const nameB = String(this.translateService.instant(b.code) || b.code);
                return nameA.localeCompare(nameB);
              });
            }
            return tx;
          }).sort((a, b) => {
            const nameA = String(this.translateService.instant(a.code) || a.code);
            const nameB = String(this.translateService.instant(b.code) || b.code);
            return nameA.localeCompare(nameB);
          }),
        } as ICasesFiltersData),
      ),
      tap((data) => (this.casesFiltersDataV = data)),
    );
  }

  get filtersData$(): Observable<IFiltersData> {
    return combineLatest([
      this.metaDataService.categories$,
      this.metaDataService.difficulties$,
      this.metaDataService.organisations$,
      this.metaDataService.thematicAreas$,
      this.metaDataService.ages$,
      this.metaDataService.genders$,
      this.metaDataService.minority$,
      this.metaDataService.channelFilter$,
      this.getFormattedLanguages(),
      this.metaDataService.organisationResponsiveness$,
      this.metaDataService.communityResponsiveness$,
      this.metaDataService.vulnerabilityFactors$,
    ]).pipe(
      map((
        [
          categories,
          difficulties,
          organisations,
          thematic,
          ages,
          genders,
          minority,
          channelFilter,
          languages,
          organisationResponsiveness,
          communityResponsiveness,
          vulnerabilityFactors,
        ]
      ) => {

        return {
          countries: this.countriesService.countriesModel(),
          categories: categories.map((c) => {
            c.checked = false;
            return c;
          }),
          difficulties: difficulties.map((d) => {
            d.checked = false;
            return d;
          }),
          organisations: organisations.map((o) => {
            o.selected = false;
            return o;
          }),
          thematic: thematic.map((tx) => {
            tx.checked = false;
            tx.children.forEach((child) => {
              child.parentId = tx.code;
              child.checked = false;
            });
            tx.children.sort((a, b) => {
              const isOtherA = a.code.toLowerCase().endsWith('other') || a.code.toLowerCase().endsWith('autre');
              const isOtherB = b.code.toLowerCase().endsWith('other') || b.code.toLowerCase().endsWith('autre');
              if (isOtherA && !isOtherB) return 1;
              if (!isOtherA && isOtherB) return -1;
              
              const nameA = String(this.translateService.instant(a.code) || a.code);
              const nameB = String(this.translateService.instant(b.code) || b.code);
              return nameA.localeCompare(nameB);
            });
            return tx;
          }).sort((a, b) => {
            const nameA = String(this.translateService.instant(a.code) || a.code);
            const nameB = String(this.translateService.instant(b.code) || b.code);
            return nameA.localeCompare(nameB);
          }),
          ages: ages.map((a) => {
            a.checked = false;
            return a;
          }),
          genders: genders.map((g) => {
            g.checked = false;
            return g;
          }),
          minority: minority.map((m) => {
            m.checked = false;
            return m;
          }),
          channelFilter: channelFilter.map((c) => {
            c.checked = false;
            return c;
          }),
          languages,
          organisationResponsiveness: organisationResponsiveness.map((r) => {
            r.checked = false;
            return r;
          }),
          communityResponsiveness: communityResponsiveness.map((c) => {
            c.checked = false;
            return c;
          }),
          vulnerabilityFactors: vulnerabilityFactors.map((vf) => {
            vf.checked = false;
            return vf;
          }).sort((a, b) => {
            const isOtherA = a.code.toLowerCase().endsWith('other') || a.code.toLowerCase().endsWith('autre');
            const isOtherB = b.code.toLowerCase().endsWith('other') || b.code.toLowerCase().endsWith('autre');
            if (isOtherA && !isOtherB) return 1;
            if (!isOtherA && isOtherB) return -1;
            
            const nameA = String(this.translateService.instant(a.code) || a.code);
            const nameB = String(this.translateService.instant(b.code) || b.code);
            return nameA.localeCompare(nameB);
          })
        } as IFiltersData;
      }),
      tap((data) => (this.filtersDataV = data)),
    );
  }

  // Extracted function for fetching languages for language filter
  private getFormattedLanguages(): Observable<IBaseEntityDN[]> {
    return this.languageService.getSupportedLanguages().pipe(
      take(1),
      map((languages) =>
        languages.sort((a, b) => a.language.localeCompare(b.language)).map((language) => ({
          code: `languages.${language.language}`,
          id: language.id.toString(),
          checked: false,
          name: this.translateService.instant(`languages.${language.language}`),
        }))
      )
    );
  }

  initUserFilters(filters: any): void {
    this.userFiltersV = filters;
  }

  filterDismissed(filter: IFilterEntity): void {
    this.filterDismissed$.next(filter);
  }

  resetUserFilters(): void {
    this.userFilters = null;
    this.lastSearch = '';
  }
}
