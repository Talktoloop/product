import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveStoryContactConsentComponent } from './sensitive-story-contact-consent.component';

describe('SensitiveStoryContactConsentComponent', () => {
  let component: SensitiveStoryContactConsentComponent;
  let fixture: ComponentFixture<SensitiveStoryContactConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensitiveStoryContactConsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensitiveStoryContactConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
