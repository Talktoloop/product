import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryReviewWebDesktopComponent } from './story-review-web-desktop.component';

describe('StoryReviewWebDesktopComponent', () => {
  let component: StoryReviewWebDesktopComponent;
  let fixture: ComponentFixture<StoryReviewWebDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryReviewWebDesktopComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewWebDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
