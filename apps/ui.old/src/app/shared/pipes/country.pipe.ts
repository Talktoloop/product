import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'country',
})
export class CountryPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: string): string {
    return value && this.translate.instant(`country_name.${value}` || value);
  }
}
