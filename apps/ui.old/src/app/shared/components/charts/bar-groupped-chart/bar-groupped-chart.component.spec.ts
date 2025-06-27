import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarGrouppedChartComponent } from './bar-groupped-chart.component';

describe('BarGrouppedChartComponent', () => {
  let component: BarGrouppedChartComponent;
  let fixture: ComponentFixture<BarGrouppedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarGrouppedChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGrouppedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
