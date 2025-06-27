import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryOrganisationsComponent } from './story-organisations.component';

describe('StoryOrganisationsComponent', () => {
  let component: StoryOrganisationsComponent;
  let fixture: ComponentFixture<StoryOrganisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryOrganisationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
