import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ headers: this.prepareHeaders(request) });

    return next.handle(request);
  }

  prepareHeaders(request: HttpRequest<any>): HttpHeaders {
    const headers = {};

    request.headers.keys().forEach((headerKey) => {
      headers[headerKey] = request.headers.get(headerKey);
    });

    if (this.authService.isLoggedIn()) {
      const authToken = `Bearer ${this.authService.accessTokenString()}`;
      // eslint-disable-next-line
      headers['Authorization'] = authToken;
    }

    return new HttpHeaders(headers);
  }
}
