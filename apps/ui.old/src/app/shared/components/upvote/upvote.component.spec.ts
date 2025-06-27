import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UpvoteComponent } from './upvote.component';

describe('UpvoteComponent', () => {
  let component: UpvoteComponent;
  let fixture: ComponentFixture<UpvoteComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UpvoteComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
