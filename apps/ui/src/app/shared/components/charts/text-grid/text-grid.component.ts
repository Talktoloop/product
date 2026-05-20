import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface ITextGrid {
  summary?: Array<{ value: number; text: string; unit?: string }>;
  table?: Array<{
    header: string;
    value?: number;
    text?: string;
    extraText?: string;
    // This should be already translated, ready-to-display string.
    // If customContent is set it is displayed instead of value and text
    customContent?: string;
    headerValue?: number;
  }>;
}
@Component({
  selector: 'loop-chart-text-grid',
  templateUrl: './text-grid.component.html',
  styleUrls: ['./text-grid.component.scss'],
})
export class TextGridComponent {
  readonly MAX_ITEMS = 7;

  @Input() data: ITextGrid;
  @Input() chartTitle: string;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() extraHeadingSpace = false;
  constructor(private translateService: TranslateService) {}

  getSecondaryHeaderText(text: string, value: number): string {
    return this.translateService.instant(text, { value }).replace(value, `<span class="highlight">${value}</span>`);
  }

  hasBottomBorder(index: number): boolean {
    let length = this.data?.table.length;
    length > this.MAX_ITEMS && (length = this.MAX_ITEMS);
    const isEven = length % 2 === 0;
    return isEven ? index < length - 2 : index < length - 1;
  }
}
