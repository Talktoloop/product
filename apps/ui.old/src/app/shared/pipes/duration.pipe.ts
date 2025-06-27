import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: number, textFormat: boolean = false): string {
    const seconds = value % 60;
    const minutes = value / 60;

    if (textFormat) {
      return this.transformToTextFormat(value);
    } else {
      return `${this.getWithZeroIfNeeded(minutes)}:${this.getWithZeroIfNeeded(seconds)}`;
    }
  }

  transformToTextFormat(value) {
    if (value === null) {
      return `0 ${this.translateService.instant('duration.seconds')}`;
    }

    const seconds = value;
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds - minutes * 60;

    const minuteString = minutes > 0 ? `${minutes} ${this.translateService.instant('duration.minutes')}` : '';
    const secondsString = remainingSeconds > 0 ? `${remainingSeconds} ${this.translateService.instant('duration.seconds')}` : '';

    if (minuteString) {
      return `${minuteString} ${secondsString}`;
    } else {
      return secondsString;
    }
  }

  getWithZeroIfNeeded(value: number) {
    const integer = Math.floor(value);
    if (integer < 10) {
      return '0' + integer;
    } else {
      return integer;
    }
  }
}
