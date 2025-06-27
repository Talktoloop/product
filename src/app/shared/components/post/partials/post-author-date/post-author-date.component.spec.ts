import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PostAuthorDateComponent } from './post-author-date.component';

describe('PostAuthorDateComponent', () => {
  let component: PostAuthorDateComponent;
  let fixture: ComponentFixture<PostAuthorDateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PostAuthorDateComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuthorDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
