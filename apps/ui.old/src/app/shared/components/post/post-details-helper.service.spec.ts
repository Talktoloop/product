import { TestBed } from '@angular/core/testing';
import { PostDetailsHelperService } from './post-details-helper.service';

describe('PostDetailsHelperService', () => {
  let service: PostDetailsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
