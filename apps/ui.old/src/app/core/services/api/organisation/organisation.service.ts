import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api-base';
import { endpoints } from '../endpoints';
import { IBaseEntity } from '../model/response/base-entity.model';
import { IBaseApiResponse } from '../model/response/base-response.model';
import { ILinkUsers, IUserOrganisation, LinkUserToOrganisation } from '../model/story.model';

@Injectable({ providedIn: 'root' })
export class OrganisationService extends ApiService {
  invites: Array<LinkUserToOrganisation> = [];
  lastInvitationsStoryId: string;
  constructor(private http: HttpClient) {
    super();
  }

  createOrganisation(name: string, countryId?: number, acronym?: string): Observable<IBaseEntity> {
    const organisationRequest = { name, ...(countryId && { countryId }), ...(acronym && { acronym }) };
    return this.http
      .post<IBaseEntity>(this.getRequestUrl(endpoints.createOrganisation), organisationRequest)
      .pipe(map((newOrganisation) => newOrganisation as IBaseEntity));
  }

  getUserOrganisation(email: string): Observable<IUserOrganisation> {
    return this.http.get<IUserOrganisation>(this.getRequestUrl(endpoints.getUserOrganisation.replace('{email}', email)));
  }

  addInvite(inviteData: LinkUserToOrganisation) {
    this.invites.push(inviteData);
  }

  getInvites(storyId: string): LinkUserToOrganisation[] {
    if (storyId !== this.lastInvitationsStoryId && this.lastInvitationsStoryId) {
      this.invites = [];
    }
    this.lastInvitationsStoryId = storyId;
    return this.invites;
  }

  linkUsersToOrganisations(payload: ILinkUsers): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.linkUsersToOrganisations), payload);
  }
}
