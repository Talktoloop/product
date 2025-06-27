import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUpdateNotifications } from '@core/services/api/model/request/update-notifications.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { USER_ROLES } from '../../auth/auth-roles.enum';
import { UIService } from '../../ui/ui.service';
import { ApiService } from '../api-base';
import { endpoints } from '../endpoints';
import { MetaDataService } from '../meta-data/meta-data.service';
import { IAddOrganizationTioUserProfileRequest } from '../model/request/add-organization.model';
import { ISubscriptionRequest } from '../model/request/subscription.model';
import { IUpdateProfileRequest } from '../model/request/update-profile.model';
import { IBaseApiResponse } from '../model/response/base-response.model';
import { IUpdateProfileResponse } from '../model/response/update-profile.model';
import { IUserProfileAPI } from '../model/response/user-profile.model';
import { IUpdateHideLastName } from '../model/request/update-hide-last-name.model';
@Injectable({
  providedIn: 'root',
})
export class ProfileService extends ApiService {
  isAdmin$ = new BehaviorSubject(false);
  userProfile: IUserProfileAPI;
  lastUpdated: number;

  constructor(private http: HttpClient, private ui: UIService, private metadataService: MetaDataService) {
    super();
  }

  logout(): void {
    this.userProfile = null;
    this.isAdmin$.next(false);
    this.metadataService.getOrganisations().subscribe();
  }

  get isAdmin(): boolean {
    return this.userProfile?.role === USER_ROLES.ADMIN;
  }

  getProfile(): Observable<IUserProfileAPI> {
    return this.http.get<IUserProfileAPI>(this.getRequestUrl(endpoints.userProfile)).pipe(
      switchMap((profile: IUserProfileAPI) => {
        this.userProfile = profile;
        this.lastUpdated = new Date().valueOf();
        this.isAdmin$.next(this.isAdmin);

        return this.metadataService.getOrganisations().pipe(map(() => profile));
      }),
    );
  }

  updateProfile(body: IUpdateProfileRequest): Observable<IUpdateProfileResponse> {
    return this.http.put<IUpdateProfileResponse>(this.getRequestUrl(endpoints.updateUserProfile), body);
  }

  sendSubscriptionRequest(body: ISubscriptionRequest): Observable<IUpdateProfileResponse> {
    return this.http.post<IUpdateProfileResponse>(this.getRequestUrl(endpoints.sendSubscriptionRequest), body);
  }

  addOrganizationToUserProfile(body: IAddOrganizationTioUserProfileRequest): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.addOrganizationToUserProfile), body);
  }

  updateNotifications(notificationsRequest: IUpdateNotifications): Observable<IBaseApiResponse> {
    return this.http.put<IBaseApiResponse>(this.getRequestUrl(endpoints.notificationsSwitch), notificationsRequest);
  }

  updateHideLastName(hideLastNameRequest: IUpdateHideLastName): Observable<{ nickname: string; success: boolean }> {
    return this.http.put<{ nickname: string; success: boolean }>(this.getRequestUrl(endpoints.hideLastNameSwitch), hideLastNameRequest);
  }
}
