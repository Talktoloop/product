import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingRecordingListComponent } from './pending-recording-list.component';

describe('PendingRecordingListComponent', () => {
  let component: PendingRecordingListComponent;
  let fixture: ComponentFixture<PendingRecordingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingRecordingListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingRecordingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
