import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensitiveCasesComponent } from './sensitive-cases.component';

describe('SensitiveCasesComponent', () => {
  let component: SensitiveCasesComponent;
  let fixture: ComponentFixture<SensitiveCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensitiveCasesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitiveCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
