import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneNumberSectionComponent } from './phone-number-section.component';

describe('PhoneNumberSectionComponent', () => {
  let component: PhoneNumberSectionComponent;
  let fixture: ComponentFixture<PhoneNumberSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneNumberSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
