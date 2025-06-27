import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTranslationsComponent } from './story-translations.component';

describe('StoryTranslationsComponent', () => {
  let component: StoryTranslationsComponent;
  let fixture: ComponentFixture<StoryTranslationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTranslationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
