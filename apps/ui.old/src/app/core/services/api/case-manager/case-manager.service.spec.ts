import { TestBed } from '@angular/core/testing';
import { CaseManagerService } from './case-manager.service';

describe('CaseManagerService', () => {
  let service: CaseManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
