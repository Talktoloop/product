import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenStoriesComponent } from './open-stories.component';

describe('OpenStoriesComponent', () => {
  let component: OpenStoriesComponent;
  let fixture: ComponentFixture<OpenStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenStoriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
