import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTagComponent } from './story-tag.component';

describe('StoryTagComponent', () => {
  let component: StoryTagComponent;
  let fixture: ComponentFixture<StoryTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
