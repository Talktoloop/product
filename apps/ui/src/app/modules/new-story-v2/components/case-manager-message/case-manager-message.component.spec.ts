import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseManagerMessageComponent } from './case-manager-message.component';

describe('CaseManagerMessageComponent', () => {
  let component: CaseManagerMessageComponent;
  let fixture: ComponentFixture<CaseManagerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseManagerMessageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseManagerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
