import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafeModeWrapperComponent } from './safe-mode-wrapper.component';

describe('SafeModeWrapperComponent', () => {
  let component: SafeModeWrapperComponent;
  let fixture: ComponentFixture<SafeModeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafeModeWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeModeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
