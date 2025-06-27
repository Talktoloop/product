import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaveTimelineChartComponent } from './wave-timeline-chart.component';

describe('WaveTimelineChartComponent', () => {
  let component: WaveTimelineChartComponent;
  let fixture: ComponentFixture<WaveTimelineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaveTimelineChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveTimelineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
