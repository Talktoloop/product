import { TestBed } from '@angular/core/testing';
import { MetaDataGuard } from './meta-data.guard';

describe('MetaDataService', () => {
  let service: MetaDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaDataGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
