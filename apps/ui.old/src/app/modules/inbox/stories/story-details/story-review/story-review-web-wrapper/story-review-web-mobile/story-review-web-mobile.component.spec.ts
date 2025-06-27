import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewWebMobileComponent } from './story-review-web-mobile.component';

describe('StoryReviewWebMobileComponent', () => {
  let component: StoryReviewWebMobileComponent;
  let fixture: ComponentFixture<StoryReviewWebMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewWebMobileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewWebMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
