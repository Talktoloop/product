import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTranslateActionButtonsComponent } from './story-translate-action-buttons.component';

describe('StoryTranslateActionButtonsComponent', () => {
  let component: StoryTranslateActionButtonsComponent;
  let fixture: ComponentFixture<StoryTranslateActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTranslateActionButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTranslateActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
