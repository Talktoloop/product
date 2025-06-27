import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarStackedByStepChartComponent } from './bar-stacked-by-step-chart.component';

describe('BarStackedByStepChartComponent', () => {
  let component: BarStackedByStepChartComponent;
  let fixture: ComponentFixture<BarStackedByStepChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarStackedByStepChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStackedByStepChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
