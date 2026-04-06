import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

export interface CognitoConfig {
  Region: string;
  UserPoolId: string;
  ClientId: string;
  LoginUrl: string;
}

export interface RollbarConfig {
  accessToken: string;
  environment: string;
}

export interface Config {
  cognitoConfig: CognitoConfig;
  frontendSessionTime: number;
  rollbarConfig: RollbarConfig;
  apiUrl: string;
  metabaseStoriesDashboardUrl: string;
}

// Cannot be nullish due to the login in app init. If this is null whole app should crash.
export let CONFIG: Config;
export const CONFIG_URL = '/assets/config.json';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private http: HttpClient) {}

  loadAppConfig(): Observable<Config> {
    return this.http.get<Config>(`${CONFIG_URL}?ver=${environment.version}`).pipe(
      take(1),
      tap((cfg) => (CONFIG = cfg)),
    );
  }
}
