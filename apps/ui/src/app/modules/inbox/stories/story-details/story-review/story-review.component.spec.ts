import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewComponent } from './story-review.component';

describe('StoryReviewComponent', () => {
  let component: StoryReviewComponent;
  let fixture: ComponentFixture<StoryReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
