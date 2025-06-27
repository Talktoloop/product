import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateWrapperFilterComponent } from './date-wrapper-filter.component';

describe('DateWrapperFilterComponent', () => {
  let component: DateWrapperFilterComponent;
  let fixture: ComponentFixture<DateWrapperFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateWrapperFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWrapperFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
