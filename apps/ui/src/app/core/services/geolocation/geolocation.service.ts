import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api/api-base';
import { endpoints } from '@app/core/services/api/endpoints';
import { UIService } from '@app/core/services/ui/ui.service';
import { GeolocationCoordinates, GeolocationPosition, IPlace } from '@core/services/api/model/location.model';
import { PermissionState } from '@shared/enums/geolocation-permission-state.enum';
import { from, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, flatMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService extends ApiService {
  private _lastLocation: GeolocationPosition;
  private _lastLocation$ = new ReplaySubject<GeolocationPosition>(1);
  userCountry = '';
  get lastLocation(): GeolocationPosition {
    return this._lastLocation;
  }

  constructor(private http: HttpClient, private ui: UIService) {
    super();
  }

  getUserLocation(): Observable<GeolocationPosition> {
    return from(this.handlePermission()).pipe(
      flatMap((status: PermissionState) => {
        if (status === PermissionState.Prompt) {
          this.ui.showLocationOverlay();
        }
        return from(this.getCurrentPosition());
      }),
      tap((location) => {
        this._lastLocation = location;
        this._lastLocation$.next(location);
      }),
      flatMap((location) => {
        return of(location);
      }),
    );
  }

  getUserPlace(coords: GeolocationCoordinates): Observable<IPlace[]> {
    const params = new HttpParams().set('longitude', coords.longitude.toString()).set('latitude', coords.latitude.toString());
    return this.http.get<IPlace[]>(this.getRequestUrl(endpoints.getUserPlace), { params });
  }

  getPlaceSuggestions(phrase: string, country?: string): Observable<IPlace[]> {
    let params = new HttpParams().set('phrase', phrase);
    params = country ? params.set('country', country) : params;
    return this.http.get<IPlace[]>(this.getRequestUrl(endpoints.getPlaceAutocomplete), { params });
  }

  getUserCountry(): Observable<{ country: string }> {
    return this.http.get<{ country: string }>(this.getRequestUrl(endpoints.getUserCountry)).pipe(
      tap((res) => {
        this.userCountry = res.country;
      }),
    );
  }

  isPermissionDenied(): Observable<boolean> {
    return from(this.handlePermission()).pipe(
      map((status: PermissionState) => status === PermissionState.Denied),
      catchError(() => of(true)),
    );
  }
  private async handlePermission(): Promise<PermissionState> {
    let result: PermissionState;

    if (navigator.permissions) {
      await navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus: PermissionStatus) => {
        result = permissionStatus.state as PermissionState;
      });
    } else {
      await navigator.geolocation.getCurrentPosition(
        () => {
          result = PermissionState.Granted;
        },
        () => {
          result = PermissionState.Denied;
        },
      );
    }

    return result;
  }

  private async getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (r) => {
          this.ui.hideLocationOverlay();
          resolve(r);
        },
        (r) => {
          this.ui.hideLocationOverlay();
          reject(r);
        },
      );
    });
  }
}
