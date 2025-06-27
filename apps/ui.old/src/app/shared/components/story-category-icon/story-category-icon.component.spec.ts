import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryCategoryIconComponent } from './story-category-icon.component';

describe('StoryTypeIconComponent', () => {
  let component: StoryCategoryIconComponent;
  let fixture: ComponentFixture<StoryCategoryIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryCategoryIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCategoryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
