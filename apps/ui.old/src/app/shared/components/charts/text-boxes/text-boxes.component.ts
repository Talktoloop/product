import { Component, Input } from '@angular/core';
import { IAvgResponseTime } from '@app/core/services/statistics/model/statistics-filters.model';
import { colors } from '@shared/components/charts/config/defaults.config';
import { ITimeWithUnit } from '@shared/utils/hours-converter';

export interface ITextBox extends IAvgResponseTime {
  value: ITimeWithUnit;
  tooltipData?: any;
  color?: string;
}

@Component({
  selector: 'loop-chart-text-boxes',
  templateUrl: './text-boxes.component.html',
  styleUrls: ['./text-boxes.component.scss'],
})
export class TextBoxesComponent {
  @Input() data: ITextBox[];
  @Input() title: string;
  @Input() color = colors;
  @Input() openStoriesMode = true;

  qualityColor(item: ITextBox): string {
    const avg = item.average;
    if (avg < 2) {
      return this.color[0];
    } else if (avg >= 2 && avg < 7) {
      return this.color[1];
    } else {
      return this.color[2];
    }
  }
}
