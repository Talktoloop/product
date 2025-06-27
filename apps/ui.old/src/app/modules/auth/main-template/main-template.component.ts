import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss'],
})
export class MainTemplateComponent {
  @Input() backAction = false;
  @Input() submitting = false;
  @Input() headerText: string;
  @Input() actionText: string;
  @Input() noWrapHeader = false;

  @Output() actionClick$ = new EventEmitter<Event>();
  @Output() backClick$ = new EventEmitter<Event>();

  handleActionClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.actionClick$.emit(event);
  }
  handlaBackClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.backClick$.emit(event);
  }
}
