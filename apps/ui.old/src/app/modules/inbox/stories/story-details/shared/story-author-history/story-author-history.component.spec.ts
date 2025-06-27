import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryAuthorHistoryComponent } from './story-author-history.component';

describe('StoryAuthorHistoryComponent', () => {
  let component: StoryAuthorHistoryComponent;
  let fixture: ComponentFixture<StoryAuthorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryAuthorHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryAuthorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
