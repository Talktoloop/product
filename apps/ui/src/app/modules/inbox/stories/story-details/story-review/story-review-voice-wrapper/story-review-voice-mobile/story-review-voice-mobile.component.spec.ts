import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewVoiceMobileComponent } from './story-review-voice-mobile.component';

describe('StoryReviewVoiceMobileComponent', () => {
  let component: StoryReviewVoiceMobileComponent;
  let fixture: ComponentFixture<StoryReviewVoiceMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewVoiceMobileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewVoiceMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
