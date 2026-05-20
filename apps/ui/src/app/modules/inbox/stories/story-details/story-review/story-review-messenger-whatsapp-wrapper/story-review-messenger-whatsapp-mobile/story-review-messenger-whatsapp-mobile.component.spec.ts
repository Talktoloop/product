import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewMessengerWhatsappMobileComponent } from './story-review-messenger-whatsapp-mobile.component';

describe('StoryReviewMessengerWhatsappMobileComponent', () => {
  let component: StoryReviewMessengerWhatsappMobileComponent;
  let fixture: ComponentFixture<StoryReviewMessengerWhatsappMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewMessengerWhatsappMobileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewMessengerWhatsappMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
