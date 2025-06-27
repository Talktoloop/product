import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewOrganizationPageComponent } from './create-new-organization-page.component';

describe('CreateNewOrganizationPageComponent', () => {
  let component: CreateNewOrganizationPageComponent;
  let fixture: ComponentFixture<CreateNewOrganizationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewOrganizationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewOrganizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
