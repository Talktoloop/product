import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryDetailsSubheadingComponent } from './story-details-subheading.component';

describe('StoryDetailsSubheadingComponent', () => {
  let component: StoryDetailsSubheadingComponent;
  let fixture: ComponentFixture<StoryDetailsSubheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryDetailsSubheadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailsSubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
