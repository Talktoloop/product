import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTranslateComponent } from './story-translate.component';

describe('StoryTranslateComponent', () => {
  let component: StoryTranslateComponent;
  let fixture: ComponentFixture<StoryTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTranslateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
