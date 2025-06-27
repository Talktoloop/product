import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api/api-base';
import { prepareUrl } from '@app/shared/utils/prepare-url';
import { statisticsEndpoints } from '@core/services/api/endpoints.statistics';
import { Observable } from 'rxjs';
import { IGetStoriesFiltersAPI } from '../api/model/request/get-story.model';
import { CONFIG } from '../config/config.service';
import {
  IAgeGenderBreakdown,
  IAverageTimeByCase,
  IAvgResponseTime,
  ICasesReceived,
  IDifficultyBreakdown,
  IGetStatisticsCasesFiltersAPI,
  IGetStatisticsFiltersAPI,
  IHowResponsiveWeAre,
  IOutcomesOfInvestigation,
  IPostTimeline,
  IRepliesStatistics,
  IStackData,
  IStoriesRepliesGroupped,
  IThematicStacked,
} from './model/statistics-filters.model';
@Injectable({
  providedIn: 'root',
})
export class StatisticsService extends ApiService {
  constructor(private http: HttpClient) {
    super();
  }

  getRepliesStatistics(payload?: IGetStatisticsFiltersAPI): Observable<IRepliesStatistics> {
    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getRepliesStatistics), this.getParams(payload));
  }

  getStoriesAndRepliesByCategory(payload?: IGetStatisticsFiltersAPI): Observable<IStoriesRepliesGroupped[]> {
    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getStoriesAndRepliesByCategory), this.getParams(payload));
  }

  getOpenPostsTimeline(payload?: IGetStatisticsFiltersAPI): Observable<IPostTimeline[]> {
    let params = new HttpParams();
    Object.keys(payload)
      .filter((k) => k !== 'type')
      .forEach((element) => (params = params.set(element, payload[element])));

    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getOpenPostsTimeline), { params });
  }

  getAverageResponseTimePerCategory(payload?: IGetStatisticsFiltersAPI): Observable<IAvgResponseTime[]> {
    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getAverageResponseTimePerCategory), this.getParams(payload));
  }

  getStoriesPerThematicArea(payload?: IGetStatisticsFiltersAPI): Observable<IThematicStacked[]> {
    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getStoriesPerThematicArea), this.getParams(payload));
  }

  getDifficultyBreakdown(payload?: IGetStatisticsFiltersAPI): Observable<IDifficultyBreakdown[]> {
    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getDifficultyBreakdown), this.getParams(payload));
  }

  getAgeGenderBreakdown(payload?: IGetStatisticsFiltersAPI): Observable<IAgeGenderBreakdown> {
    let params = new HttpParams();
    Object.keys(payload)
      .filter((k) => k !== 'type')
      .forEach((element) => (params = params.set(element, payload[element])));

    return this.http.get<IAgeGenderBreakdown>(this.getRequestUrl(statisticsEndpoints.getAgeGenderBreakdown), { params });
  }

  // CASES

  getCasesTimeline(payload?: IGetStatisticsCasesFiltersAPI): Observable<IPostTimeline[]> {
    let params = new HttpParams();
    Object.keys(payload)
      .filter((k) => k !== 'type')
      .forEach((element) => (params = params.set(element, payload[element])));

    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getCasesTimeline), { params });
  }

  getTypeOfCasesAccountability(payload?: IGetStatisticsCasesFiltersAPI): Observable<IStackData[]> {
    return this.http.get<any>(this.getRequestUrl(statisticsEndpoints.getTypeOfCasesAccountability), this.getParams(payload));
  }

  getCasesReceived(payload?: IGetStatisticsCasesFiltersAPI): Observable<ICasesReceived> {
    return this.http.get<ICasesReceived>(this.getRequestUrl(statisticsEndpoints.getCasesReceived), this.getParams(payload));
  }

  getAverageTimeTakenPerCaseType(payload?: IGetStatisticsCasesFiltersAPI): Observable<IAverageTimeByCase[]> {
    return this.http.get<IAverageTimeByCase[]>(
      this.getRequestUrl(statisticsEndpoints.getAverageTimeTakenPerCaseType),
      this.getParams(payload),
    );
  }

  getWhatTypeOfPeopleReferredToAssistanceReceivedIt(payload?: IGetStatisticsCasesFiltersAPI): Observable<IStackData[]> {
    return this.http.get<IStackData[]>(
      this.getRequestUrl(statisticsEndpoints.getWhatTypeOfPeopleReferredToAssistanceReceivedIt),
      this.getParams(payload),
    );
  }

  getHowResponsiveWeAre(payload?: IGetStatisticsCasesFiltersAPI): Observable<IHowResponsiveWeAre> {
    return this.http.get<IHowResponsiveWeAre>(this.getRequestUrl(statisticsEndpoints.getHowResponsiveWeAre), this.getParams(payload));
  }

  getWhatTypeOfOrganizationReceivingAllegation(payload?: IGetStatisticsCasesFiltersAPI): Observable<IStackData[]> {
    return this.http.get<IStackData[]>(
      this.getRequestUrl(statisticsEndpoints.getWhatTypeOfOrganizationReceivingAllegation),
      this.getParams(payload),
    );
  }

  getSurvivorAge(payload?: IGetStatisticsCasesFiltersAPI): Observable<IStackData[]> {
    return this.http.get<IStackData[]>(this.getRequestUrl(statisticsEndpoints.getSurvivorAge), this.getParams(payload));
  }

  getSurvivorGender(payload?: IGetStatisticsCasesFiltersAPI): Observable<IStackData[]> {
    return this.http.get<IStackData[]>(this.getRequestUrl(statisticsEndpoints.getSurvivorGender), this.getParams(payload));
  }

  getWhoIsSharingSensitiveStories(payload?: IGetStatisticsCasesFiltersAPI): Observable<IStackData[]> {
    return this.http.get<IStackData[]>(this.getRequestUrl(statisticsEndpoints.getWhoIsSharingSensitiveStories), this.getParams(payload));
  }

  getOutcomesOfInvestigation(payload?: IGetStatisticsCasesFiltersAPI): Observable<IOutcomesOfInvestigation[]> {
    return this.http.get<IOutcomesOfInvestigation[]>(
      this.getRequestUrl(statisticsEndpoints.getOutcomesOfInvestigation),
      this.getParams(payload),
    );
  }

  getOpenStoriesSignedUrl(filters?: IGetStoriesFiltersAPI): Observable<{ url: string }> {
    const fullUrl = prepareUrl(CONFIG.apiUrl, statisticsEndpoints.getOpenStatsMetabaseEmbeddLink);

    return this.http.get<{ url: string }>(fullUrl, {
      params: filters ? this.prepareParams(filters) : {},
    });
  }

  getSensitiveStoriesSignedUrl(filters?: IGetStoriesFiltersAPI): Observable<{ url: string }> {
    const fullUrl = prepareUrl(CONFIG.apiUrl, statisticsEndpoints.getSensitiveStatsMetabaseEmbeddLink);

    return this.http.get<{ url: string }>(fullUrl, {
      params: filters ? this.prepareParams(filters) : {},
    });
  }

  private getParams(payload: IGetStatisticsCasesFiltersAPI): { params: HttpParams } {
    return { params: this.prepareParams(payload) };
  }

  private prepareParams(payload: IGetStatisticsCasesFiltersAPI): HttpParams {
    if (!payload) {
      return {} as HttpParams;
    }
    let params = new HttpParams();
    Object.keys(payload).forEach((element) => (params = params.set(element, payload[element])));
    return params;
  }
}
