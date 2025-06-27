import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurLoopPromiseComponent } from './our-loop-promise.component';

describe('OurLoopPromiseComponent', () => {
  let component: OurLoopPromiseComponent;
  let fixture: ComponentFixture<OurLoopPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurLoopPromiseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurLoopPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
