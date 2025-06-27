import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTypeBoxgroupComponent } from './story-type-boxgroup.component';

describe('StoryTypeBoxgroupComponent', () => {
  let component: StoryTypeBoxgroupComponent;
  let fixture: ComponentFixture<StoryTypeBoxgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTypeBoxgroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTypeBoxgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
