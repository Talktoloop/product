import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionalStoryInfoSectionComponent } from './additional-story-info-section.component';

describe('AdditionalStoryInfoSectionComponent', () => {
  let component: AdditionalStoryInfoSectionComponent;
  let fixture: ComponentFixture<AdditionalStoryInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalStoryInfoSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalStoryInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
