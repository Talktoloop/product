import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTranslateDesktopComponent } from './story-translate-desktop.component';

describe('StoryTranslateDesktopComponent', () => {
  let component: StoryTranslateDesktopComponent;
  let fixture: ComponentFixture<StoryTranslateDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTranslateDesktopComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTranslateDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
