import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostTranslationControllerComponent } from './post-translation-controller.component';

describe('PostTranslationControllerComponent', () => {
  let component: PostTranslationControllerComponent;
  let fixture: ComponentFixture<PostTranslationControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostTranslationControllerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTranslationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
