import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliedToFilterComponent } from './replied-to-filter.component';

describe('RepliedToFilterComponent', () => {
  let component: RepliedToFilterComponent;
  let fixture: ComponentFixture<RepliedToFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepliedToFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepliedToFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
