import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagePickerModalComponent } from './language-picker-modal.component';

describe('LanguagePickerModalComponent', () => {
  let component: LanguagePickerModalComponent;
  let fixture: ComponentFixture<LanguagePickerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagePickerModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagePickerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
