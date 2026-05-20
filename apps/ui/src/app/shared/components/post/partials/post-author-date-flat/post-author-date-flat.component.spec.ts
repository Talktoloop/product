import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PostAuthorDateFlat } from './post-author-date-flat.component';

describe('PostAuthorDateV2Component', () => {
  let component: PostAuthorDateFlat;
  let fixture: ComponentFixture<PostAuthorDateFlat>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PostAuthorDateFlat],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuthorDateFlat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
