import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CyDirective } from './cy.directive';

@Component({
  template: `<h1 cy="h1"></h1> `,
})
class TestComponent {}

describe('CyDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, CyDirective],
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should set a [data-cy]=h1 to header element', () => {
    const elements = fixture.debugElement.queryAll(By.css('[data-cy]=h1'));
    expect(elements.length).toBe(1);
  });
});
