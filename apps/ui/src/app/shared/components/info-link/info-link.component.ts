import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'loop-info-link',
  templateUrl: './info-link.component.html',
  styleUrls: ['./info-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoLinkComponent {
  @Input() text: string;
  @Input() showIcon = true;
  @Output() clicked = new EventEmitter<void>();

  onClick($event: Event): void {
    $event.preventDefault();
    this.clicked.emit();
  }
}
