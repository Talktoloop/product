import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperV2Component } from './stepper-v2.component';

describe('StepperV2Component', () => {
  let component: StepperV2Component;
  let fixture: ComponentFixture<StepperV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperV2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
