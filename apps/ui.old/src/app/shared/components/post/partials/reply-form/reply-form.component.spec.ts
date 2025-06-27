import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReplyFormComponent } from './reply-form.component';

describe('ReplyFormComponent', () => {
  let component: ReplyFormComponent;
  let fixture: ComponentFixture<ReplyFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReplyFormComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
