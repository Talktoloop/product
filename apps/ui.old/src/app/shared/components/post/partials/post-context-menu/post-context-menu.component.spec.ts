import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostContextMenuComponent } from './post-context-menu.component';

describe('PostContextMenuComponent', () => {
  let component: PostContextMenuComponent;
  let fixture: ComponentFixture<PostContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostContextMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
