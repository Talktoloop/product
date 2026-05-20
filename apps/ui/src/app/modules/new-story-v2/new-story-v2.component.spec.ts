import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewStoryV2Component } from './new-story-v2.component';

describe('NewStoryV2Component', () => {
  let component: NewStoryV2Component;
  let fixture: ComponentFixture<NewStoryV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStoryV2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
