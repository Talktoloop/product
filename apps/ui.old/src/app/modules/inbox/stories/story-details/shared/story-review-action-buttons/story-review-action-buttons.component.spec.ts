import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewActionButtonsComponent } from './story-review-action-buttons.component';

describe('StoryReviewActionButtonsComponent', () => {
  let component: StoryReviewActionButtonsComponent;
  let fixture: ComponentFixture<StoryReviewActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewActionButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
