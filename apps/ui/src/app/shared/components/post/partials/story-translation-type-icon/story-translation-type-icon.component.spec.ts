import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTranslationTypeIconComponent } from './story-translation-type-icon.component';

describe('StoryTranslationTypeIconComponent', () => {
  let component: StoryTranslationTypeIconComponent;
  let fixture: ComponentFixture<StoryTranslationTypeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTranslationTypeIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTranslationTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
