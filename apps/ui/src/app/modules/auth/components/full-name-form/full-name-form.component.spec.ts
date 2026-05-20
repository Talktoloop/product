import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameFormComponent } from './full-name-form.component';

describe('FullNameFormComponent', () => {
  let component: FullNameFormComponent;
  let fixture: ComponentFixture<FullNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullNameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
