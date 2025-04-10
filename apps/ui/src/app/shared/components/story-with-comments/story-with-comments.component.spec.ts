import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryWithCommentsComponent } from './story-with-comments.component';

describe('StoryWithCommentsComponent', () => {
  let component: StoryWithCommentsComponent;
  let fixture: ComponentFixture<StoryWithCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryWithCommentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryWithCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
