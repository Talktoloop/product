import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStoryTranslation } from '@app/core/services/api/model/story-translation';
import { IGetPendingStoriesFiltersAPI } from '@app/modules/inbox/inbox-filters.service';
import { ApiService } from '@core/services/api/api-base';
import { endpoints } from '@core/services/api/endpoints';
import { IComment, IUpdateCommentModerator } from '@core/services/api/model/comment.model';
import { IAddCommentAPI } from '@core/services/api/model/request/add-comment.model';
import { IRejectReason } from '@core/services/api/model/request/reject-reason.model';
import { IUploadIvvrAudioRequest } from '@core/services/api/model/request/upload-ivvr-audio.model';
import { IBasePaginatedAPI } from '@core/services/api/model/response/base-paginated-api.model';
import { IBaseApiResponse } from '@core/services/api/model/response/base-response.model';
import { IGetOutboxIntroOutroRecordings } from '@core/services/api/model/response/get-outbox-intro-outro-recordings.model';
import { IPendingRecordComment } from '@core/services/api/model/response/pending-record-comments.model';
import { IUploadIvrrFilesResponse } from '@core/services/api/model/response/upload-ivrr-files.model';
import { addFilterParamsToHttpParams } from '@shared/utils/filters.utils';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService extends ApiService {
  constructor(private http: HttpClient) {
    super();
  }

  getComments(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.getRequestUrl(endpoints.getComments.replace('{id}', id)));
  }

  addComment(id: string, payload: IAddCommentAPI): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.addComment.replace('{id}', id)), payload);
  }

  voteComment(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.voteComment, { '{id}': id }), {});
  }

  unvoteComment(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.unvoteComment, { '{id}': id }), {});
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

  getCommentsModerator(filters: IGetPendingStoriesFiltersAPI, page: number, limit: number, order: string): Observable<IBasePaginatedAPI> {
    let params = new HttpParams().append('page', page.toString()).append('limit', limit.toString()).append('order', order.toString());
    params = addFilterParamsToHttpParams(params, filters);

    return this.http.get<IBasePaginatedAPI>(this.getRequestUrl(endpoints.getCommentsModerator), { params });
  }

  getCommentModerator(id: string): Observable<IComment> {
    return this.http.get<IComment>(this.getRequestUrl(endpoints.getCommentModerator, { '{id}': id }));
  }

  publishCommentModerator(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.publishCommentModerator, { '{id}': id }), {});
  }

  unpublishCommentModerator(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.unpublishCommentModerator, { '{id}': id }), {});
  }

  rejectCommentModerator(id: string, payload?: IRejectReason): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.rejectCommentModerator, { '{id}': id }), payload || {});
  }

  getCommentTranslationStatuses(id: string): Observable<IStoryTranslation[]> {
    return this.http.get<IStoryTranslation[]>(this.getRequestUrl(endpoints.getCommentTranslationStatuses, { '{id}': id }));
  }

  addCommentTranslationModerator(id: string, payload: { language: string; content: string }): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.addCommentTranslationModerator, { '{id}': id }), payload);
  }

  verifyCommentTranslationModerator(id: string, payload: { language: string; content: string }): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.verifyCommentTranslationModerator, { '{id}': id }), payload);
  }

  retryCommentTranslationModerator(id: string, language: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.retryCommentTranslationModerator, { '{id}': id }), { language });
  }

  deleteCommentTranslationModerator(id: string, language: string): Observable<IBaseApiResponse> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        language,
      },
    };
    return this.http.delete<IBaseApiResponse>(this.getRequestUrl(endpoints.deleteCommentTranslationModerator, { '{id}': id }), options);
  }

  deleteCommentAdmin(id: string): Observable<IBaseApiResponse> {
    return this.http.delete<IBaseApiResponse>(this.getRequestUrl(endpoints.deleteCommentAdmin, { '{id}': id }), {});
  }

  updateCommentModerator(id: string, updateCommentAPI: IUpdateCommentModerator): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.updateCommentModerator, { '{id}': id }), updateCommentAPI);
  }

  getPendingRecordingComments(
    filters: IGetPendingStoriesFiltersAPI,
    page: number,
    limit: number,
    order: string,
  ): Observable<IBasePaginatedAPI<IPendingRecordComment>> {
    let params = new HttpParams().append('page', page.toString()).append('limit', limit.toString()).append('order', order.toString());

    if (filters) {
      (Object.keys(filters) || []).forEach((element) => {
        if (filters[element]?.length) {
          params = params.set(element, filters[element]);
        }
      });
    }

    return this.http.get<IBasePaginatedAPI<IPendingRecordComment>>(this.getRequestUrl(endpoints.getPendingRecordingComments), { params });
  }

  getScheduledRecordingComments(
    filters: IGetPendingStoriesFiltersAPI,
    page: number,
    limit: number,
    order: string,
  ): Observable<IBasePaginatedAPI<IPendingRecordComment>> {
    let params = new HttpParams().append('page', page.toString()).append('limit', limit.toString()).append('order', order.toString());

    params = addFilterParamsToHttpParams(params, filters);

    return this.http.get<IBasePaginatedAPI<IPendingRecordComment>>(this.getRequestUrl(endpoints.getScheduledRecordingComments), { params });
  }

  putPendingRecordingComment(id: string): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.putPendingRecordingComment.replace('{id}', id)), {});
  }

  getOutboxIntroOutroRecordings(language): Observable<IGetOutboxIntroOutroRecordings> {
    return this.http.get<IGetOutboxIntroOutroRecordings>(
      this.getRequestUrl(endpoints.getIntroOutro, {
        '{language}': language,
      }),
    );
  }

  uploadAudioComment(uploadIvrrFilesRequest: IUploadIvvrAudioRequest): Observable<IUploadIvrrFilesResponse> {
    const formData = new FormData();
    formData.append('commentId', uploadIvrrFilesRequest.commentId);
    formData.append('files', uploadIvrrFilesRequest.files[0], `${uploadIvrrFilesRequest.commentId}.mp3`);

    return this.http.post<IUploadIvrrFilesResponse>(this.getRequestUrl(endpoints.postS3AudioFiles), formData);
  }
}

export enum COMMENT_TYPE {
  NEW = 'new',
  PUBLISHED = 'published',
  REJECTED = 'rejected',
}
