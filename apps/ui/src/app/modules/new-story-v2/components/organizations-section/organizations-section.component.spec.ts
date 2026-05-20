import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationsSectionComponent } from './organizations-section.component';

describe('OrganizationsSectionComponent', () => {
  let component: OrganizationsSectionComponent;
  let fixture: ComponentFixture<OrganizationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationsSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
