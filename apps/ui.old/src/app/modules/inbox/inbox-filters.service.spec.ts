import { TestBed } from '@angular/core/testing';
import { InboxFiltersService } from './inbox-filters.service';

describe('InboxFiltersService', () => {
  let service: InboxFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboxFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
