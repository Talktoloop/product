import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-translate-header',
  templateUrl: './translate-header.component.html',
  styleUrls: ['./translate-header.component.scss'],
})
export class TranslateHeaderComponent {
  @Input() title: string;
  @Input() subTitle: string;
}
