import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnonymousDataComponent } from './anonymous-data.component';

describe('AnonymousDataComponent', () => {
  let component: AnonymousDataComponent;
  let fixture: ComponentFixture<AnonymousDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnonymousDataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
