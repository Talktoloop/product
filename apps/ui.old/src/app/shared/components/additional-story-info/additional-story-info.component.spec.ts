import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionalStoryInfoComponent } from './additional-story-info.component';

describe('AdditionalStoryInfoComponent', () => {
  let component: AdditionalStoryInfoComponent;
  let fixture: ComponentFixture<AdditionalStoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalStoryInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalStoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
