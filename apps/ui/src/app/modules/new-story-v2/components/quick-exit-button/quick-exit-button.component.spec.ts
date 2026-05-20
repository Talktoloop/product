

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickExitButtonComponent } from './quick-exit-button.component';

describe('QuickEscapeButtonComponent', () => {
  let component: QuickExitButtonComponent;
  let fixture: ComponentFixture<QuickExitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickExitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickExitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
