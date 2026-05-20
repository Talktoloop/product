import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarStackedMultiChartComponent } from './bar-stacked-multi-chart.component';

describe('BarStackedMultiChartComponent', () => {
  let component: BarStackedMultiChartComponent;
  let fixture: ComponentFixture<BarStackedMultiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarStackedMultiChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStackedMultiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
