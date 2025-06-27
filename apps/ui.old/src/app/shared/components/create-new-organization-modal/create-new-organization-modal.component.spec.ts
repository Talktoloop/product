import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewOrganizationModalComponent } from './create-new-organization-modal.component';

describe('CreateNewOrganizationModalComponent', () => {
  let component: CreateNewOrganizationModalComponent;
  let fixture: ComponentFixture<CreateNewOrganizationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewOrganizationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewOrganizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
