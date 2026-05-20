import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-visibility',
  templateUrl: './password-visibility.component.html',
  styleUrls: ['./password-visibility.component.scss'],
})
export class PasswordVisibilityComponent {
  @Input() visible = false;
  @Output() toogle$ = new EventEmitter<void>();

  toogle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.toogle$.emit();
  }
}
