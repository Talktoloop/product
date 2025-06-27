import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignModeratorFormComponent } from './assign-moderator-form.component';

describe('AssignModeratorFormComponent', () => {
  let component: AssignModeratorFormComponent;
  let fixture: ComponentFixture<AssignModeratorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignModeratorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignModeratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
