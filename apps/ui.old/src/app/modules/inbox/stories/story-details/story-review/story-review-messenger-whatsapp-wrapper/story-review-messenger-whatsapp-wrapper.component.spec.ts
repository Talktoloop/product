import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewMessengerWhatsappWrapperComponent } from './story-review-messenger-whatsapp-wrapper.component';

describe('StoryReviewMessengerWhatsappWrapperComponent', () => {
  let component: StoryReviewMessengerWhatsappWrapperComponent;
  let fixture: ComponentFixture<StoryReviewMessengerWhatsappWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewMessengerWhatsappWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewMessengerWhatsappWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
