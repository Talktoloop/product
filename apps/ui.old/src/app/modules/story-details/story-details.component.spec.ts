import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoryDetailsComponent } from './story-details.component';

describe('StoryDetailsComponent', () => {
  let component: StoryDetailsComponent;
  let fixture: ComponentFixture<StoryDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StoryDetailsComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
