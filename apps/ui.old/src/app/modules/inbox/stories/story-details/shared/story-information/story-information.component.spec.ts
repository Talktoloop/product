import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryInformationComponent } from './story-information.component';

describe('StoryInformationComponent', () => {
  let component: StoryInformationComponent;
  let fixture: ComponentFixture<StoryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryInformationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
