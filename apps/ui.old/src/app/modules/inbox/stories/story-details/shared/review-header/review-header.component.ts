import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-header',
  templateUrl: './review-header.component.html',
  styleUrls: ['./review-header.component.scss'],
})
export class ReviewHeaderComponent {
  @Input() title: string;
  @Input() subTitle: string;
}
