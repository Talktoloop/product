import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CheckSquareComponent } from './check-square.component';

describe('SquareComponent', () => {
  let component: CheckSquareComponent;
  let fixture: ComponentFixture<CheckSquareComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CheckSquareComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
