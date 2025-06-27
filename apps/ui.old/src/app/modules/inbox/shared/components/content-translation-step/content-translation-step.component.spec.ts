import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContentTranslationStepComponent } from './content-translation-step.component';

describe('ContentTranslationStepComponent', () => {
  let component: ContentTranslationStepComponent;
  let fixture: ComponentFixture<ContentTranslationStepComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ContentTranslationStepComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTranslationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
