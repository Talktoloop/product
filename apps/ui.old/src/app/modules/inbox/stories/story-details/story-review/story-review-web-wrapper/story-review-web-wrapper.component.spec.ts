import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewWebWrapperComponent } from './story-review-web-wrapper.component';

describe('StoryReviewWebWrapperComponent', () => {
  let component: StoryReviewWebWrapperComponent;
  let fixture: ComponentFixture<StoryReviewWebWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewWebWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewWebWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
