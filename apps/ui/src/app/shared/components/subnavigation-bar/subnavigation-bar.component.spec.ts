import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubnavigationBarComponent } from './subnavigation-bar.component';

describe('SubnavigationBarComponent', () => {
  let component: SubnavigationBarComponent;
  let fixture: ComponentFixture<SubnavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubnavigationBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
