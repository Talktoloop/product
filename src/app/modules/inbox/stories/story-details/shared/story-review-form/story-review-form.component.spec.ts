import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewFormComponent } from './story-review-form.component';

describe('StoryReviewFormComponent', () => {
  let component: StoryReviewFormComponent;
  let fixture: ComponentFixture<StoryReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
