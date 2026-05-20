import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateHeaderComponent } from './translate-header.component';

describe('TranslateHeaderComponent', () => {
  let component: TranslateHeaderComponent;
  let fixture: ComponentFixture<TranslateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranslateHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
