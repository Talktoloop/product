import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoopToastComponent } from './loop-toast.component';

describe('LoopToastComponent', () => {
  let component: LoopToastComponent;
  let fixture: ComponentFixture<LoopToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoopToastComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
