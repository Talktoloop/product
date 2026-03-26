import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { LanguageConfirmationModalComponent } from './language-confirmation-modal.component';

describe('LanguageConfirmationModalComponent', () => {
  let component: LanguageConfirmationModalComponent;
  let fixture: ComponentFixture<LanguageConfirmationModalComponent>;
  let close$: Subject<any>;

  beforeEach(async () => {
    close$ = new Subject<any>();

    await TestBed.configureTestingModule({
      declarations: [LanguageConfirmationModalComponent],
      providers: [
        { provide: 'close$', useValue: close$ }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty language', () => {
    expect(component.language).toBe('');
  });

  it('should have a confirm Subject', () => {
    expect(component.confirm).toBeInstanceOf(Subject);
  });

  describe('confirmLanguage', () => {
    it('should emit language through confirm Subject', (done) => {
      const testLanguage = 'es';
      component.language = testLanguage;

      component.confirm.subscribe((language) => {
        expect(language).toBe(testLanguage);
        done();
      });

      component.confirmLanguage();
    });

    it('should close modal after confirming', () => {
      spyOn(component, 'onModalClose');
      component.language = 'fr';

      component.confirmLanguage();

      expect(component.onModalClose).toHaveBeenCalled();
    });

    it('should emit close$ through close Subject when confirming', (done) => {
      component.language = 'ar';

      close$.subscribe((value) => {
        expect(value).toBeNull();
        done();
      });

      component.confirmLanguage();
    });
  });

  describe('onCancel', () => {
    it('should close modal', () => {
      spyOn(component, 'onModalClose');

      component.onCancel();

      expect(component.onModalClose).toHaveBeenCalled();
    });

    it('should emit close$ through close Subject', (done) => {
      close$.subscribe((value) => {
        expect(value).toBeNull();
        done();
      });

      component.onCancel();
    });

    it('should not emit through confirm Subject', () => {
      let confirmEmitted = false;
      component.confirm.subscribe(() => {
        confirmEmitted = true;
      });

      component.onCancel();

      expect(confirmEmitted).toBe(false);
    });
  });

  describe('language input', () => {
    it('should accept language input', () => {
      component.language = 'en';
      expect(component.language).toBe('en');
    });

    it('should handle different language codes', () => {
      const languages = ['en', 'es', 'fr', 'ar', 'so'];

      languages.forEach((lang) => {
        component.language = lang;
        expect(component.language).toBe(lang);
      });
    });
  });
});

