import { Component } from '@angular/core';

@Component({
  selector: 'loop-quick-exit-button',
  templateUrl: './quick-exit-button.component.html',
  styleUrls: ['./quick-exit-button.component.scss']
})
export class QuickExitButtonComponent {
  closeTab() {
    window.location.replace('https://www.google.com');
  }
}
