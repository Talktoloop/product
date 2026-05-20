import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUpdateStoryAPI } from '@app/core/services/api/model/request/update-story.model';
import { IStoryTranslation } from '@app/core/services/api/model/story-translation';
import { IGetPendingStoriesFiltersAPI } from '@app/modules/inbox/inbox-filters.service';
import { ICount } from '@app/modules/statistics/statistics.component';
import { ApiService } from '@core/services/api/api-base';
import { endpoints } from '@core/services/api/endpoints';
import { statisticsEndpoints } from '@core/services/api/endpoints.statistics';
import { IAddStoryDTO } from '@core/services/api/model/request/add-story.model';
import { IGetStoriesFiltersAPI } from '@core/services/api/model/request/get-story.model';
import { IRejectReason } from '@core/services/api/model/request/reject-reason.model';
import { IBasePaginatedAPI } from '@core/services/api/model/response/base-paginated-api.model';
import { IBaseApiResponse } from '@core/services/api/model/response/base-response.model';
import { IStory } from '@core/services/api/model/story.model';
import { IGetStatisticsCasesFiltersAPI } from '@core/services/statistics/model/statistics-filters.model';
import { Observable } from 'rxjs';
import { IMultipleReject } from '../model/request/multiple-reject.model';
import { ISendStoryToCaseManager } from '../model/request/send-story-to-case-manager.model';
import { IModeratorStoryBrief } from '../model/response/get-stories-moderator.model';
import { ModeratorDetailList } from '../model/response/moderator-details.model';
import { IMultipleRejectResponse } from '../model/response/multiple-reject-response.model';

@Injectable()
export class StoryService extends ApiService {
  constructor(private http: HttpClient) {
    super();
  }

  openStoriesCount(filters?: IGetStoriesFiltersAPI): Observable<ICount> {
    return this.http.get<ICount>(this.getRequestUrl(statisticsEndpoints.getOpenStoriesCount), {
      params: this.prepareParams(filters),
    });
  }

  casesCount(filters?: IGetStatisticsCasesFiltersAPI): Observable<ICount> {
    return this.http.get<ICount>(this.getRequestUrl(statisticsEndpoints.getCasesCount), { params: this.prepareParams(filters) });
  }

  getStories(page: number, limit: number, order: string, filters?: IGetStoriesFiltersAPI): Observable<IBasePaginatedAPI<IStory>> {
    const allowedFilters = Object.keys(new IGetStoriesFiltersAPI());

    //replace searchText filter key
    const updatedFilters = filters
      ? Object.keys(filters).reduce((acc, key) => {
        if (allowedFilters.includes(key)) {
          const newKey = key.includes('SearchText') ? 'searchTerm' : key;
          acc[newKey] = filters[key];
        }
        return acc;
      }, {} as Record<string, any>)
      : {};

    let params = new HttpParams().set('page', page.toString()).set('limit', limit.toString()).append('order', order.toString());

    Object.keys(updatedFilters).forEach((key) => {
      if (updatedFilters[key]) {
        params = params.set(key, `${updatedFilters[key]}`);
      }
    });

    return this.http.get<IBasePaginatedAPI<IStory>>(this.getRequestUrl(endpoints.getStories), { params });
  }

  exportStoriesToCSV(filters?: IGetStoriesFiltersAPI) {
    const params = this.cleanFiltersAndPrepareParams(filters);
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/csv');

    return this.http.get(this.getRequestUrl(endpoints.exportStoriesToCsv), { params, headers, responseType: 'arraybuffer' });
  }

  saveUserCSVActivity() {
    return this.http.get(this.getRequestUrl(endpoints.saveUserCSVActivity));
  }

  getStory(id: string): Observable<IStory> {
    return this.http.get<IStory>(this.getRequestUrl(endpoints.getStory.replace('{id}', id)));
  }

  voteStory(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.voteStory, { '{id}': id }), {});
  }

  unvoteStory(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.unvoteStory, { '{id}': id }), {});
  }

  setUserVoted(id: string, state: boolean): void {
    if (state) {
      localStorage.setItem(id, '1');
    } else {
      localStorage.removeItem(id);
    }
  }

  hasUserVoted(id: string): boolean {
    return !!localStorage.getItem(id);
  }

  addStory(payload: Partial<IAddStoryDTO>): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.addStory), payload);
  }

  getPostsModerator(
    filters: IGetPendingStoriesFiltersAPI,
    page: number,
    limit: number,
    order: string,
  ): Observable<IBasePaginatedAPI<IModeratorStoryBrief>> {
    let params = new HttpParams().append('page', page.toString()).append('limit', limit.toString()).append('order', order.toString());

    if (filters) {
      (Object.keys(filters) || []).forEach((element) => {
        if (filters[element]?.length || typeof filters[element] === 'boolean') {
          params = params.set(element, filters[element]);
        }
      });
    }

    return this.http.get<IBasePaginatedAPI>(this.getRequestUrl(endpoints.getStoriesModerator), { params });
  }

  getStoriesModeratorSorting(): Observable<string[]> {
    return this.http.get<string[]>(this.getRequestUrl(endpoints.getStoriesModeratorSorting));
  }

  publishStoryModerator(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.publishStoryModerator, { '{id}': id }), {});
  }

  unpublishStoryModerator(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.unpublishStoryModerator, { '{id}': id }), {});
  }

  updateStoryModerator(id: string, payload: IUpdateStoryAPI): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.updateStoryModerator, { '{id}': id }), payload);
  }

  rejectStoryModerator(id: string, reasonData?: IRejectReason): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.rejectStoryModerator, { '{id}': id }), reasonData || {});
  }

  rejectStoriesModerator(payload: IMultipleReject): Observable<IMultipleRejectResponse> {
    return this.http.post<IMultipleRejectResponse>(this.getRequestUrl(endpoints.rejectMultipleStoriesModerator), payload);
  }

  assignStoryToModerators(payload: {
    id: string;
    storyIds: string[];
  }): Observable<{ assignedStoriesIds: string[]; assignedModerator: ModeratorDetailList }> {
    return this.http.put<{ assignedStoriesIds: string[]; assignedModerator: ModeratorDetailList }>(
      this.getRequestUrl(endpoints.assignStoryToModerator, { '{id}': payload.id }),
      { storyIds: payload.storyIds },
    );
  }

  sendStoryToCaseManagerModerator(id: string, data: ISendStoryToCaseManager): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.sendStoryToCaseManagerModerator, { '{id}': id }), data);
  }

  getStoryTranslationStatuses(id: string): Observable<IStoryTranslation[]> {
    return this.http.get<IStoryTranslation[]>(this.getRequestUrl(endpoints.getStoryTranslationStatuses, { '{id}': id }));
  }

  addStoryTranslationModerator(id: string, payload: { language: string; content: string }): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.addStoryTranslationModerator, { '{id}': id }), payload);
  }

  verifyStoryTranslationModerator(id: string, payload: { language: string; content: string }): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.verifyStoryTranslationModerator, { '{id}': id }), payload);
  }

  restoreStoryTranslationModerator(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.restoreStoryTranslationModerator, { '{id}': id }), {});
  }

  retryStoryTranslationModerator(id: string, language: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.retryStoryTranslationModerator, { '{id}': id }), { language });
  }

  deleteStoryTranslationModerator(id: string, language: string): Observable<IBaseApiResponse> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        language,
      },
    };
    return this.http.delete<IBaseApiResponse>(this.getRequestUrl(endpoints.deleteStoryTranslationModerator, { '{id}': id }), options);
  }

  getStoryModerator(id: string, channel: string): Observable<IStory> {
    return this.http.get<IStory>(
      this.getRequestUrl(endpoints.getStoryModerator, {
        '{id}': id,
        '{channel}': channel,
      }),
    );
  }

  private prepareParams(filters?: IGetStoriesFiltersAPI | IGetStatisticsCasesFiltersAPI): HttpParams {
    let params = new HttpParams();

    if (filters) {
      (Object.keys(filters) || []).forEach((key) => {
        if (!!filters[key]) {
          params = params.set(key, `${filters[key]}`);
        }
      });
    }
    return params;
  }

  exportUNFeedbackToCSV(filters?: IGetStoriesFiltersAPI) {
    const params = this.cleanFiltersAndPrepareParams(filters);
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/csv');

    return this.http.get(this.getRequestUrl(endpoints.exportUnitedFeedbackToCsv), {
      params,
      headers,
      responseType: 'arraybuffer',
    });
  }

  private cleanFiltersAndPrepareParams(filters?: IGetStoriesFiltersAPI): HttpParams {
    const allowedFilters: string[] = Object.keys(new IGetStoriesFiltersAPI());
    for (const filterKey in filters) {
      if (!allowedFilters.includes(filterKey)) {
        delete filters[filterKey];
      }
    }
    return this.prepareParams(filters);
  }

  updateTranscription(id: string, payload: { content: string; editedContent?: string }): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.updateTranscription, { '{id}': id }), payload);
  }
}

export enum STORY_TYPE {
  NEW = 'new',
  PUBLISHED = 'published',
  REJECTED = 'rejected',
}
