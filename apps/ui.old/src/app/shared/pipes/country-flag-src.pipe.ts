import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFlagSrc',
})
export class CountryFlagSrcPipe implements PipeTransform {
  transform(value: string): string {
    const countryCode = this.getFlagCode(value);

    return `assets/flags/${countryCode}.svg`;
  }

  private getFlagCode(value: string): string {
    if (!value) {
      return 'unknown';
    }
    const parsedValue = value.toLowerCase();
    switch (parsedValue) {
      case 'bq':
      case 'an':
        return 'nl';

      default:
        return parsedValue;
    }
  }
}
