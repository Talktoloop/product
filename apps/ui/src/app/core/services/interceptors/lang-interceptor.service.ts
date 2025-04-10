import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLanguageService } from '../locales/user-language.service';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
  private readonly LANGUAGE_HEADER = 'content-language';

  constructor(private userLanguageService: UserLanguageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ headers: this.prepareHeaders(request) });

    return next.handle(request);
  }

  prepareHeaders(request: HttpRequest<any>): HttpHeaders {
    const headers = {};

    request.headers.keys().forEach((headerKey) => {
      headers[headerKey] = request.headers.get(headerKey);
    });

    headers[this.LANGUAGE_HEADER] = this.userLanguageService.getLanguage();
    return new HttpHeaders(headers);
  }
}
