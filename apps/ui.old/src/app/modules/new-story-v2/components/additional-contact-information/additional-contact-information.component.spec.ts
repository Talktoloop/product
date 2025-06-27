import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalContactInformationComponent } from './additional-contact-information.component';

describe('AdditionalContactInformationComponent', () => {
  let component: AdditionalContactInformationComponent;
  let fixture: ComponentFixture<AdditionalContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalContactInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
