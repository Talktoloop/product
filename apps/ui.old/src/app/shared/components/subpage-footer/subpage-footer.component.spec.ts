import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubpageFooterComponent } from './subpage-footer.component';

describe('SubpageFooterComponent', () => {
  let component: SubpageFooterComponent;
  let fixture: ComponentFixture<SubpageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubpageFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
