import { TestBed } from '@angular/core/testing';
import { OutboxGuard } from './outbox.guard';

describe('OutboxGuard', () => {
  let guard: OutboxGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OutboxGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
