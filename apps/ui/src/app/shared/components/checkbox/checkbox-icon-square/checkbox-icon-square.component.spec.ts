import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxIconSquareComponent } from './checkbox-icon-square.component';

describe('CheckboxIconSquareComponent', () => {
  let component: CheckboxIconSquareComponent;
  let fixture: ComponentFixture<CheckboxIconSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxIconSquareComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxIconSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
