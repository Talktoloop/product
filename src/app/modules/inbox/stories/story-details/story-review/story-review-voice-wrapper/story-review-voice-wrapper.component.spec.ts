import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewVoiceWrapperComponent } from './story-review-voice-wrapper.component';

describe('StoryReviewVoiceWrapperComponent', () => {
  let component: StoryReviewVoiceWrapperComponent;
  let fixture: ComponentFixture<StoryReviewVoiceWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewVoiceWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewVoiceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
