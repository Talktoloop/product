import { TestBed } from '@angular/core/testing';
import { CognitoSessionInterceptorService } from './cognito-session-interceptor.service';

describe('CognitoSessionInterceptorService', () => {
  let service: CognitoSessionInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CognitoSessionInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
