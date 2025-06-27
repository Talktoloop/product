import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG, CONFIG_URL } from '@core/services/config/config.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  private readonly CSRF_METHODS = ['POST', 'PUT', 'DELETE'];
  private readonly TOKEN_KEY = 'CSRF-Token';
  private readonly HEADER_KEY = 'CSRF-Token';
  private readonly EXCLUDE_URLS = [CONFIG_URL];

  constructor(private cookieService: CookieService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (
      !this.EXCLUDE_URLS.some((excludeUrl) => request.url.includes(excludeUrl)) &&
      request.url.indexOf(CONFIG.apiUrl) >= 0 &&
      this.CSRF_METHODS.indexOf(request.method) >= 0
    ) {
      request = request.clone({ headers: this.prepareHeaders(request) });
    }

    return next.handle(request);
  }

  prepareHeaders(request: HttpRequest<any>): HttpHeaders {
    const headers = {};

    request.headers.keys().forEach((headerKey) => {
      headers[headerKey] = request.headers.get(headerKey);
    });

    const csrfToken = this.cookieService.get(this.TOKEN_KEY);
    headers[this.HEADER_KEY] = csrfToken;

    return new HttpHeaders(headers);
  }
}
