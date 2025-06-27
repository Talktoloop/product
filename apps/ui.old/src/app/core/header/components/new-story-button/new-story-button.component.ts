import { ChangeDetectorRef, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';

@Component({
  selector: 'app-new-story-button',
  templateUrl: './new-story-button.component.html',
  styleUrls: ['./new-story-button.component.scss'],
})
export class NewStoryButtonComponent {
  windowScrolled: boolean;
  @Output() clicked = new EventEmitter<Event>();

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.uiService.isWindowScrolled !== this.windowScrolled) {
      this.windowScrolled = this.uiService.isWindowScrolled;
      this.cd.markForCheck();
    }
  }

  constructor(public uiService: UIService, private cd: ChangeDetectorRef) {}

  newStoryClicked($event: Event): void {
    this.clicked.emit($event);
  }
}
