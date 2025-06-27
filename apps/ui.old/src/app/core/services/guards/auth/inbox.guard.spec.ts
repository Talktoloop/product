import { TestBed } from '@angular/core/testing';
import { InboxGuard } from './inbox.guard';

describe('InboxGuard', () => {
  let guard: InboxGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InboxGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
