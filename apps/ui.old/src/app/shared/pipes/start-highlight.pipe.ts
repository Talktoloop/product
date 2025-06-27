import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startHighlight',
})
export class StartHighlightPipe implements PipeTransform {
  transform(wholeText: string, searchQuery: string): string {
    if (!searchQuery) {
      return wholeText;
    }
    const re = new RegExp(searchQuery, 'gi');
    return wholeText.replace(re, '<span class="highlight">$&</span>');
  }
}
