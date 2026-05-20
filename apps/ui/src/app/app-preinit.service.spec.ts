import { TestBed } from '@angular/core/testing';
import { AppPreinitService } from './app-preinit.service';

describe('AppPreinitService', () => {
  let service: AppPreinitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPreinitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
