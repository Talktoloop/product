import { TestBed } from '@angular/core/testing';
import { OutboxFiltersService } from './outbox-filters.service';

describe('OutboxFiltersService', () => {
  let service: OutboxFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutboxFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
