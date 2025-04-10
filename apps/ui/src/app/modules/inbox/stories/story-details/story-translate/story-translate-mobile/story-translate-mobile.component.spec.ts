import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryTranslateMobileComponent } from './story-translate-mobile.component';

describe('StoryTranslateMobileComponent', () => {
  let component: StoryTranslateMobileComponent;
  let fixture: ComponentFixture<StoryTranslateMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryTranslateMobileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTranslateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
