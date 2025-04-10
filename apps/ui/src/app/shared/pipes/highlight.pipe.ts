import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(wholeText: string, searchQuery: string): string {
    if (!searchQuery || searchQuery.length < 3) {
      return wholeText;
    }
    const re = new RegExp(searchQuery, 'gi');
    return wholeText.replace(re, '<span class="highlight">$&</span>');
  }
}
