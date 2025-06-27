import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewVoiceDesktopComponent } from './story-review-voice-desktop.component';

describe('StoryReviewVoiceDesktopComponent', () => {
  let component: StoryReviewVoiceDesktopComponent;
  let fixture: ComponentFixture<StoryReviewVoiceDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewVoiceDesktopComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewVoiceDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
