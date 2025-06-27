import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinStoryComponent } from './pin-story.component';

describe('PinStoryComponent', () => {
  let component: PinStoryComponent;
  let fixture: ComponentFixture<PinStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinStoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
