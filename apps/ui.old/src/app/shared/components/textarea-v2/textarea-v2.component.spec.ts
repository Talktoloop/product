import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextareaV2Component } from './textarea-v2.component';

describe('TextareaV2Component', () => {
  let component: TextareaV2Component;
  let fixture: ComponentFixture<TextareaV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaV2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
