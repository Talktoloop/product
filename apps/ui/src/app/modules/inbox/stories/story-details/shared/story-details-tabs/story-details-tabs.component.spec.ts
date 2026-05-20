import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryDetailsTabsComponent } from './story-details-tabs.component';

describe('StoryDetailsTabsComponent', () => {
  let component: StoryDetailsTabsComponent;
  let fixture: ComponentFixture<StoryDetailsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryDetailsTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
