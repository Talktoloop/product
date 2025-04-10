import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '@core/services/config/config.service';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { CookieService } from 'ngx-cookie-service';
import { concat, from, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';
import 'whatwg-fetch';
import { ApiService } from '../api/api-base';
import { endpoints } from '../api/endpoints';
import { CognitoError } from '../api/model/cognito-errror.enum';
import { IConfirmationStatus } from '../api/model/response/confirmation-status.model';
import { ProfileService } from '../api/profile/profile.service';
import { LocalStorageKeys } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private readonly sessionKey = 'se_t';
  private readonly authCookieAdditionalParams = {
    path: '/',
    domain: location.hostname,
    secure: true,
  };
  private readonly lastAuthUser;
  private userPool: AmazonCognitoIdentity.CognitoUserPool;
  private userSession: AmazonCognitoIdentity.CognitoUserSession;
  private accessToken: string;
  private extendSubject$ = new Subject();
  cognitoUser: AmazonCognitoIdentity.CognitoUser;
  didLogoutDuringSession = false;
  extendSubscription: Subscription;
  get session(): AmazonCognitoIdentity.CognitoUserSession | null {
    return this.userSession;
  }

  constructor(private cookieService: CookieService, private profileService: ProfileService, private http: HttpClient) {
    super();
    this.restartExtendSubscription();
  }

  /**
   * Method gets called in app pre-init after CONFIG has been loaded.
   */
  initialise(): void {
    const config = CONFIG.cognitoConfig;
    this.userPool = new AmazonCognitoIdentity.CognitoUserPool(config);
    this.cognitoUser = this.userPool.getCurrentUser();
  }

  isSessionExpired(): boolean {
    return !this.cookieService.get(this.sessionKey);
  }

  hasPreviousUserData(): boolean {
    return !!localStorage.getItem(`CognitoIdentityServiceProvider.${CONFIG.cognitoConfig.ClientId}.LastAuthUser`);
  }

  login(username, password): Observable<any> {
    return from(this.cognitoLogin(username, password));
  }

  resetPassword(username): Observable<any> {
    return from(this.cognitoResetPassword(username));
  }

  refreshCurrentUserSession(): Observable<any> {
    return from(this.cognitoGetSession());
  }

  confirmRegistration(username, code): Observable<any> {
    return from(this.cognitoConfirmRegistration(username, code));
  }

  resendCode(username): Observable<any> {
    return from(this.cognitoResendCode(username));
  }

  changePassword(username, code, newPassword): Observable<any> {
    return from(this.cognitoChangePassword(username, code, newPassword));
  }
  createNewPassword(username, code, newPassword): Observable<any> {
    return from(this.confirmUserPasswordChange(username, code, newPassword));
  }

  getConfirmationStatus(email: string): Observable<IConfirmationStatus> {
    return this.http.get<IConfirmationStatus>(this.getRequestUrl(endpoints.getConfirmationStatus), {
      params: new HttpParams().append('email', email),
    });
  }

  logout(): void {
    this.didLogoutDuringSession = true;
    this.accessToken = null;
    this.userSession = null;
    this.cookieService.delete(this.sessionKey, this.authCookieAdditionalParams.path);
    this.profileService.logout();
    this.cognitoUser?.signOut();
    this.restartExtendSubscription();
  }

  restartExtendSubscription(): void {
    if (this.extendSubscription) {
      this.extendSubscription.unsubscribe();
      this.extendSubject$ = new Subject();
    }
    this.extendSubscription = concat(this.extendSubject$.pipe(take(1)), this.extendSubject$.pipe(debounceTime(3000))).subscribe(() => {
      this.extendFrontendSession();
    });
  }

  accessTokenString(): string {
    return this.accessToken;
  }

  isLoggedIn(): boolean {
    return !!this.accessTokenString();
  }

  clearCognitoData(): void {
    this.cognitoUser?.signOut();
  }

  extendFrontendSession(): void {
    this.cookieService.set(
      this.sessionKey,
      'true',
      new Date(new Date().valueOf() + this.getTokenExpiryInSeconds() * 1000),
      this.authCookieAdditionalParams.path,
    );
  }

  async loginViaToken(email: string, token: string): Promise<any> {
    const request = await new Promise(async (resolve, reject) => {
      const userData: AmazonCognitoIdentity.ICognitoUserData = {
        Username: email,
        Pool: this.userPool,
      };
      this.cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      this.cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');
      const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: email,
      });
      this.cognitoUser.initiateAuth(authenticationDetails, {
        onSuccess: (result) => {
          //it is not going to be called for CUSTOM_AUTH
        },
        onFailure: (err) => {
          reject(err);
        },
        customChallenge: () => {
          this.cognitoUser.sendCustomChallengeAnswer(token, {
            onSuccess: (session) => {
              this.assignUserSession(this.cognitoUser, session);
              resolve(session);
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        },
      });
    });

    return request;
  }

  sendMagicLink(email: string): Observable<HttpResponse<any>> {
    const sendMagicLinkUrl = CONFIG.cognitoConfig.LoginUrl;
    const currentLanguageCode = localStorage.getItem(LocalStorageKeys.LANGUAGE_PREFERENCE);

    return this.http.post(sendMagicLinkUrl, JSON.stringify({ email, languageCode: currentLanguageCode }), { observe: 'response' });
  }

  private getTokenExpiryInSeconds(): number {
    return CONFIG.frontendSessionTime || 3600;
  }

  private assignUserSession(user: AmazonCognitoIdentity.CognitoUser, session: AmazonCognitoIdentity.CognitoUserSession): void {
    this.cognitoUser = user;
    this.userSession = session;
    this.accessToken = session.getAccessToken().getJwtToken();
    this.extendSubject$.next(true);
  }

  private async cognitoResetPassword(username): Promise<any> {
    const request = await new Promise(async (resolve, reject) => {
      const { cognitoUser } = this.prepareEmailCognitoData(username);

      cognitoUser.forgotPassword({
        onSuccess: (session) => {
          resolve(session);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
    return request;
  }

  private async confirmUserPasswordChange(username, code, password): Promise<any> {
    const request = await new Promise(async (resolve, reject) => {
      const { cognitoUser } = this.prepareEmailCognitoData(username);

      cognitoUser.confirmPassword(code, password, {
        onSuccess: () => {
          resolve(true);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
    return request;
  }

  private async cognitoChangePassword(username, oldPassword, newPassword): Promise<any> {
    const request = await new Promise(async (resolve, reject) => {
      const { authenticationDetails, cognitoUser } = this.prepareCognitoData(username, oldPassword);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
          this.assignUserSession(cognitoUser, session);
        },
        onFailure: (err) => {
          this.userSession = null;
          reject(err);
        },
        newPasswordRequired(userAttributes, requiredAttributes): void {
          cognitoUser.completeNewPasswordChallenge(newPassword, requiredAttributes, {
            onSuccess: (res) => {
              resolve(res);
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        },
      });
    });
    return request;
  }

  private async cognitoResendCode(username): Promise<any> {
    const request = await new Promise(async (resolve, reject) => {
      const { authenticationDetails, cognitoUser } = this.prepareCognitoData(username, '');
      cognitoUser.resendConfirmationCode((err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
    return request;
  }

  private async cognitoConfirmRegistration(username, code): Promise<any> {
    const request = await new Promise(async (resolve, reject) => {
      const { authenticationDetails, cognitoUser } = this.prepareCognitoData(username, '');
      this.cognitoUser = cognitoUser;
      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
    return request;
  }

  private async cognitoLogin(username, password): Promise<AmazonCognitoIdentity.CognitoUserSession> {
    const request = (await new Promise(async (resolve, reject) => {
      const { authenticationDetails, cognitoUser } = this.prepareCognitoData(username, password);

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
          this.assignUserSession(cognitoUser, session);
          resolve(session);
        },
        onFailure: (err) => {
          this.userSession = null;
          reject(err);
        },
      });
    })) as AmazonCognitoIdentity.CognitoUserSession;
    return request;
  }

  private async cognitoGetSession(): Promise<AmazonCognitoIdentity.CognitoUserSession> {
    this.cognitoUser = this.userPool.getCurrentUser();
    const request = (await new Promise(async (resolve, reject) => {
      if (!this.cognitoUser) {
        const email = localStorage.getItem(`CognitoIdentityServiceProvider.${CONFIG.cognitoConfig.ClientId}.LastAuthUser`);
        if (email) {
          const userData: AmazonCognitoIdentity.ICognitoUserData = {
            Username: email,
            Pool: this.userPool,
          };
          this.cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        } else {
          reject(new Error(CognitoError.RefreshSessionError));
          return;
        }
      }

      this.cognitoUser.getSession((err, session: AmazonCognitoIdentity.CognitoUserSession) => {
        if (session) {
          if (session.isValid()) {
            this.assignUserSession(this.cognitoUser, session);
            resolve(session);
            return;
          }
          const refreshToken = session.getRefreshToken();
          this.cognitoUser.refreshSession(refreshToken, (err, session) => {
            if (err) {
              reject(new Error(CognitoError.RefreshSessionError));
            } else {
              this.assignUserSession(this.cognitoUser, session);
              resolve(session);
            }
          });
        } else {
          reject(new Error(CognitoError.RefreshSessionError));
        }
      });
    })) as AmazonCognitoIdentity.CognitoUserSession;
    return request;
  }

  private prepareCognitoData(
    username,
    password,
  ): {
    cognitoUser: AmazonCognitoIdentity.CognitoUser;
    authenticationDetails: AmazonCognitoIdentity.AuthenticationDetails;
  } {
    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    const userData = {
      Username: username,
      Pool: this.userPool,
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');
    return { authenticationDetails, cognitoUser };
  }

  private prepareEmailCognitoData(username): {
    cognitoUser: AmazonCognitoIdentity.CognitoUser;
  } {
    const userData = {
      Username: username,
      Pool: this.userPool,
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');
    return { cognitoUser };
  }
}
