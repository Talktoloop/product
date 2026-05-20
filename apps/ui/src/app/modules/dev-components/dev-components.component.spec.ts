import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevComponentsComponent } from './dev-components.component';

describe('DevComponentsComponent', () => {
  let component: DevComponentsComponent;
  let fixture: ComponentFixture<DevComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevComponentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
