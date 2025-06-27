import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'wordCount',
})
export class WordCountPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(wordCount: number | string): string {
    wordCount = typeof wordCount === 'string' ? 0 : wordCount;
    return `${wordCount} ${this.translateService.instant(wordCount === 1 ? 'wordCount.singleWord' : 'wordCount.multipleWords')}`;
  }
}
