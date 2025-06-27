import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewMessengerWhatsappDesktopComponent } from './story-review-messenger-whatsapp-desktop.component';

describe('StoryReviewMessengerWhatsappDesktopComponent', () => {
  let component: StoryReviewMessengerWhatsappDesktopComponent;
  let fixture: ComponentFixture<StoryReviewMessengerWhatsappDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewMessengerWhatsappDesktopComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewMessengerWhatsappDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
