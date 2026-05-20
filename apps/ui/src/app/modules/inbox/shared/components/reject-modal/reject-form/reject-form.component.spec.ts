import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InboxRejectFormComponent } from './reject-form.component';

describe('InboxRejectFormComponent', () => {
  let component: InboxRejectFormComponent;
  let fixture: ComponentFixture<InboxRejectFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InboxRejectFormComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxRejectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
