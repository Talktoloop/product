import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss'],
})
export class DetailsContainerComponent {
  @ViewChild('detailsHeader') detailsHeader: ElementRef<HTMLDivElement>;
  @Input() backUrl: string;
  @Input() backToText: string;
}
