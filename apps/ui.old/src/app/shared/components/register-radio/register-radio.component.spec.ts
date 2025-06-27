import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRadioComponent } from './register-radio.component';

describe('RegisterRadioComponent', () => {
  let component: RegisterRadioComponent;
  let fixture: ComponentFixture<RegisterRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
