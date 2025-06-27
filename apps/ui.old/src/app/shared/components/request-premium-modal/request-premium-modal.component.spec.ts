import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPremiumModalComponent } from './request-premium-modal.component';

describe('RequestPremiumModalComponent', () => {
  let component: RequestPremiumModalComponent;
  let fixture: ComponentFixture<RequestPremiumModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPremiumModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPremiumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
