import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api/api-base';
import { endpoints } from '@core/services/api/endpoints';
import { statisticsEndpoints } from '@core/services/api/endpoints.statistics';
import { genericRetryStrategy } from '@core/services/api/generic-retry-strategy';
import { IBaseEntity, IBaseEntityCheck, IBaseEntityD, IBaseEntityN } from '@core/services/api/model/response/base-entity.model';
import { ICategory } from '@core/services/api/model/response/get-categories.model';
import { IGetThematicAPIExtended } from '@core/services/api/model/response/get-thematic.model';
import { AGE_MAPPING, AGE_VALUE, CASES_AGE_MAPPING } from '@shared/types/age.type';
import { ASSISTANCE_REFERRED_REVERSE_MAPPING } from '@shared/types/assistance-referred.type';
import { CASE_TYPE_MAPPING, CASE_TYPE_REVERSE_MAPPING } from '@shared/types/case-type.type';
import { CHANNEL_MAPPING, CHANNEL_VALUE } from '@shared/types/channel-type';
import { CASES_DIFFICULTY_MAPPING, DIFFICULTY_TRANSLATE_MAPPING } from '@shared/types/difficulty.type';
import { CASES_GENDER_MAPPING, GENDER_MAPPING, GENDER_VALUE } from '@shared/types/gender.type';
import { INVESTIGATION_OUTCOME_MAPPING, INVESTIGATION_OUTCOME_REVERSE_MAPPING } from '@shared/types/investigation-outcome.type';
import { MINORITY_MAPPING, MINORITY_VALUE } from '@shared/types/minority.type';
import { ORGANISATION_TYPE_MAPPING, ORGANISATION_TYPE_REVERSE_MAPPING } from '@shared/types/organisation-type.type';
import { ORGANISATION_RESPONSIVENESS_TO_VALUE, ORGANISATION_RESPONSIVENESS_TO_MAPPING } from '@shared/types/replied-to.type';
import { BehaviorSubject, combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, finalize, map, retryWhen, take, tap, timeout } from 'rxjs/operators';
import { ModeratorDetailList } from '../model/response/moderator-details.model';
import { COMMUNITY_RESPONSIVENESS_MAPPING, COMMUNITY_RESPONSIVENESS_VALUE } from "@shared/types/communityResponsiveness.type";
import { VULNERABILITY_FACTORS_MAPPING } from "@shared/types/vulnerabilityFactors.type";

@Injectable({
  providedIn: 'root',
})
export class MetaDataService extends ApiService {
  difficulties$ = new ReplaySubject<IBaseEntityD[]>(1);
  categories$ = new ReplaySubject<ICategory[]>(1);
  organisations$ = new ReplaySubject<IBaseEntityN[]>(1);
  maternityStatuses$ = new ReplaySubject<IBaseEntity[]>(1);
  thematicAreas$ = new ReplaySubject<IGetThematicAPIExtended[]>(1);
  rejectReasons$ = new BehaviorSubject<IBaseEntityD[]>(null);
  moderatorsList$ = new BehaviorSubject<ModeratorDetailList[]>(null);
  ages$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  casesAges$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  casesGender$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  casesDifficulties$ = new ReplaySubject<IBaseEntityD[]>(1);
  minority$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  casesThematic$ = new ReplaySubject<IGetThematicAPIExtended[]>(1);
  genders$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  caseTypes$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  organisationTypes$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  investigationOutcome$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  referredForAssistance$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  channelFilter$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  organisationResponsiveness$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  communityResponsiveness$ = new ReplaySubject<IBaseEntityCheck[]>(1);
  vulnerabilityFactors$ = new ReplaySubject<IBaseEntityCheck[]>(1);

  private metaDataProcessing = false;
  private casesMetaDataProcessing = false;

  constructor(private http: HttpClient) {
    super();
  }

  requestMissingMetaData(): void {
    if (this.metaDataProcessing) {
      return;
    }
    this.metaDataProcessing = true;
    combineLatest([
      this.difficulties$.pipe(
        take(1),
        timeout(1),
        catchError((err) => {
          return this.getDifficulties();
        }),
      ),
      this.categories$.pipe(
        take(1),
        timeout(1),
        catchError((err) => {
          return this.getCategories();
        }),
      ),
      this.organisations$.pipe(
        take(1),
        timeout(1),
        catchError((err) => {
          return this.getOrganisations();
        }),
      ),

      this.maternityStatuses$.pipe(
        take(1),
        timeout(1),
        catchError((err) => {
          return this.getMaternityStatuses();
        }),
      ),

      this.thematicAreas$.pipe(
        take(1),
        timeout(1),
        catchError((err) => {
          return this.getThematicAreas();
        }),
      ),
      this.getGenders().pipe(take(1)),
      this.getAges().pipe(take(1)),
      this.getOrganisationResponsiveness().pipe(take(1)),
      this.getChannelFilter().pipe(take(1)),
      this.getMinority().pipe(take(1)),
      this.getCommunityResponsiveness().pipe(take(1)),
      this.getVulnerabilityFactors().pipe(take(1)),
    ])
      .pipe(
        take(1),
        finalize(() => {
          this.metaDataProcessing = false;
        }),
      )
      .subscribe();
  }

  requestMissingCasesMetaData(): void {
    if (this.casesMetaDataProcessing) {
      return;
    }
    this.casesMetaDataProcessing = true;
    combineLatest([
      this.getCaseTypes().pipe(take(1)),
      this.getOrganisationTypes().pipe(take(1)),
      this.getInvestigationOutcome().pipe(take(1)),
      this.getReferredForAssistance().pipe(take(1)),
      this.getCasesAges().pipe(take(1)),
      this.getCasesGender().pipe(take(1)),
      this.getCasesDificulties().pipe(take(1)),
      this.getCasesThematic().pipe(take(1)),
    ])
      .pipe(
        take(1),
        catchError((err) => {
          console.log(err);
          return err;
        }),
        finalize(() => {
          this.metaDataProcessing = false;
        }),
      )
      .subscribe();
  }

  getMaternityStatuses(): Observable<IBaseEntity[]> {
    return this.http.get<IBaseEntity[]>(this.getRequestUrl(endpoints.getMaternityStatuses)).pipe(
      map((statuses) => statuses.map((maternity) => ({ ...maternity, code: `maternity.${maternity.code}` }))),
      retryWhen(genericRetryStrategy()),
      tap((statuses) => {
        this.maternityStatuses$.next(statuses);
      }),
    );
  }

  getDifficulties(): Observable<IBaseEntityD[]> {
    return this.http.get<IBaseEntity[]>(this.getRequestUrl(endpoints.getDifficulties)).pipe(
      map((difficulties) => difficulties.map((difficulty) => ({ ...difficulty, code: DIFFICULTY_TRANSLATE_MAPPING[difficulty.id] }))),
      retryWhen(genericRetryStrategy()),
      tap((difficulties) => {
        this.difficulties$.next(difficulties);
      }),
    );
  }

  getMinority(): Observable<IBaseEntityCheck[]> {
    return of(
      Object.values(MINORITY_VALUE).map((minorityId) => {
        return { id: minorityId.toString(), value: minorityId.toString(), checked: false, code: MINORITY_MAPPING[minorityId] };
      }),
    ).pipe(
      tap((minority) => {
        this.minority$.next(minority);
      }),
    );
  }

  getOrganisations(): Observable<IBaseEntityN[]> {
    return this.http.get<IBaseEntityN[]>(this.getRequestUrl(endpoints.getOrganisations)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((organisations) => {
        this.organisations$.next(organisations.sort((a, b) => (a.name > b.name ? 1 : -1)));
      }),
    );
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.getRequestUrl(endpoints.getCategories)).pipe(
      map((categories) => categories.map((category) => ({ ...category, code: `category.${category.code}` }))),
      retryWhen(genericRetryStrategy()),
      tap((categories) => {
        this.categories$.next(categories);
      }),
    );
  }

  getThematicAreas(): Observable<IGetThematicAPIExtended[]> {
    const mapToFrontEndModel = (item) => {
      return { ...item, code: `thematic.${item.code}` };
    };
    return this.http.get<IGetThematicAPIExtended[]>(this.getRequestUrl(endpoints.getThematicAreas)).pipe(
      map((thematic) =>
        thematic.map((tx) => ({
          ...mapToFrontEndModel(tx),
          id: tx.code,
          children: tx.children.map(mapToFrontEndModel),
        })),
      ),
      retryWhen(genericRetryStrategy()),
      tap((thematic) => {
        this.thematicAreas$.next(thematic);
      }),
    );
  }

  getGenders(): Observable<IBaseEntityCheck[]> {
    return of(
      Object.values(GENDER_VALUE).map((genderId) => {
        return { id: genderId.toString(), value: genderId.toString(), checked: false, code: GENDER_MAPPING[genderId] };
      }),
    ).pipe(
      tap((genders) => {
        this.genders$.next(genders);
      }),
    );
  }

  getAges(): Observable<IBaseEntityCheck[]> {
    return of(
      Object.values(AGE_VALUE).map((ageId) => {
        return { id: ageId.toString(), value: ageId.toString(), checked: false, code: AGE_MAPPING[ageId] };
      }),
    ).pipe(
      tap((ages) => {
        this.ages$.next(ages);
      }),
    );
  }

  getReasons(): Observable<IBaseEntityD[]> {
    return this.http.get<IBaseEntityD[]>(this.getRequestUrl(endpoints.getRejectReasons)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((reasons) => {
        reasons?.length && this.rejectReasons$.next(reasons);
      }),
    );
  }

  getModeratorsList(): Observable<ModeratorDetailList[]> {
    return this.http.get<ModeratorDetailList[]>(this.getRequestUrl(endpoints.getModeratorsList)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((response) => {
        this.moderatorsList$.next(response);
      }),
    );
  }

  getReferredForAssistance(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(statisticsEndpoints.getReferredForAssistance)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        const mappedData: IBaseEntityCheck[] = data.map((d) => ({
          id: ASSISTANCE_REFERRED_REVERSE_MAPPING[d],
          code: `assistanceReferred.${d}`,
          value: d,
          checked: false,
        }));
        this.referredForAssistance$.next(mappedData);
      }),
    );
  }

  getCasesAges(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(statisticsEndpoints.getCasesAge)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        const mappedData: IBaseEntityCheck[] = data.map((d, index) => ({
          code: AGE_MAPPING[CASES_AGE_MAPPING[d]],
          checked: false,
          id: CASES_AGE_MAPPING[d],
          value: d,
        }));
        this.casesAges$.next(mappedData);
      }),
    );
  }

  getCasesGender(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(statisticsEndpoints.getCasesGender)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        const mappedData: IBaseEntityCheck[] = data.map((d, index) => ({
          code: GENDER_MAPPING[CASES_GENDER_MAPPING[d]],
          checked: false,
          id: CASES_GENDER_MAPPING[d],
          value: d,
        }));
        this.casesGender$.next(mappedData);
      }),
    );
  }

  getCasesDificulties(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(statisticsEndpoints.getCasesDisability)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        const mappedData: IBaseEntityCheck[] = data.map((d, index) => ({
          code: DIFFICULTY_TRANSLATE_MAPPING[CASES_DIFFICULTY_MAPPING[d]],
          checked: false,
          id: CASES_DIFFICULTY_MAPPING[d],
          value: d,
        }));
        this.casesDifficulties$.next(mappedData);
      }),
    );
  }

  getCasesThematic(): Observable<IGetThematicAPIExtended[]> {
    return this.http.get<IGetThematicAPIExtended[]>(this.getRequestUrl(statisticsEndpoints.getCasesThematic)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        this.casesThematic$.next(
          data.map((tx, index) => ({
            id: `thematic.${tx.code}`,
            code: `thematic.${tx.code}`,
            checked: false,
            children: tx.children.map((child) => ({
              ...child,
              code: `thematic.${child.code.split('.')[1]}`,
              parentId: `thematic.${tx.code}`,
            })),
          })),
        );
      }),
    );
  }

  getOrganisationTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(statisticsEndpoints.getOrganisationType)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        const mappedData: IBaseEntityCheck[] = data.map((d, index) => ({
          code: `organisationType.${ORGANISATION_TYPE_MAPPING[ORGANISATION_TYPE_REVERSE_MAPPING[d]]}`,
          checked: false,
          id: ORGANISATION_TYPE_REVERSE_MAPPING[d],
          value: d,
        }));
        this.organisationTypes$.next(mappedData);
      }),
    );
  }

  getCaseTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(statisticsEndpoints.getCaseType)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        const mappedData: IBaseEntityCheck[] = data.map((d, index) => ({
          code: `caseTypes.${CASE_TYPE_MAPPING[CASE_TYPE_REVERSE_MAPPING[d]]}`,
          checked: false,
          id: CASE_TYPE_REVERSE_MAPPING[d],
          value: d,
        }));
        this.caseTypes$.next(mappedData);
      }),
    );
  }

  getInvestigationOutcome(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(statisticsEndpoints.getInvestigationOutcome)).pipe(
      retryWhen(genericRetryStrategy()),
      tap((data) => {
        const mappedData: IBaseEntityCheck[] = data.map((d, index) => ({
          code: `outcomesOfInvestigation.${INVESTIGATION_OUTCOME_MAPPING[INVESTIGATION_OUTCOME_REVERSE_MAPPING[d]]}`,
          checked: false,
          id: INVESTIGATION_OUTCOME_REVERSE_MAPPING[d],
          value: d,
        }));
        this.investigationOutcome$.next(mappedData);
      }),
    );
  }

  getOrganisationResponsiveness(): Observable<IBaseEntityCheck[]> {
    return of(
      Object.values(ORGANISATION_RESPONSIVENESS_TO_VALUE).map((orgRespId) => {
        return {
          id: orgRespId.toString(),
          value: orgRespId.toString(),
          checked: false,
          code: ORGANISATION_RESPONSIVENESS_TO_MAPPING[orgRespId]
        };
      }),
    ).pipe(
      tap((orgResp) => {
        this.organisationResponsiveness$.next(orgResp);
      }),
    );
  }

  getChannelFilter(): Observable<IBaseEntityCheck[]> {
    return of(
      Object.values(CHANNEL_VALUE).map((channelId) => {
        return { id: channelId.toString(), value: channelId.toString(), checked: false, code: CHANNEL_MAPPING[channelId] };
      }),
    ).pipe(
      tap((channels) => {
        this.channelFilter$.next(channels);
      }),
    );
  }

  getCommunityResponsiveness(): Observable<IBaseEntityCheck[]> {
    return of(
      Object.values(COMMUNITY_RESPONSIVENESS_VALUE).map((commRespId) => {
        return {
          id: commRespId.toString(),
          value: commRespId.toString(),
          checked: false,
          code: COMMUNITY_RESPONSIVENESS_MAPPING[commRespId],
        };
      }),
    ).pipe(
      tap((commResp) => {
        this.communityResponsiveness$.next(commResp);
      }),
    );
  }

  getVulnerabilityFactors(): Observable<IBaseEntityCheck[]> {
    return this.http.get<any[]>(this.getRequestUrl(endpoints.getVulnerabilityFactors)).pipe(
      map((factors) => factors.map((factor) => {
        // Use real ID from API instead of hardcoded mapping
        return {
          id: factor.id.toString(),
          value: factor.id.toString(),
          checked: false,
          code: VULNERABILITY_FACTORS_MAPPING[factor.code] || factor.code,
        };
      })),
      retryWhen(genericRetryStrategy()),
      tap((vulnerabilityFactors) => {
        this.vulnerabilityFactors$.next(vulnerabilityFactors);
      }),
    );
  }
}
