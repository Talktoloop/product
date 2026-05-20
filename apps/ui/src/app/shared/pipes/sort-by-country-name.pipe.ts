import { Pipe, PipeTransform } from '@angular/core';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { UserLanguageService } from '@app/core/services/locales/user-language.service';
import { Option } from '@shared/model/option.model';

@Pipe({
  name: 'sortByCountryName',
})
export class SortByCountryNamePipe implements PipeTransform {
  constructor(private readonly userLanguageService: UserLanguageService) {}

  transform(value: Array<IBaseEntityN | Option> = []): Array<IBaseEntityN | Option> {
    return value.sort((countryA, countryB) => countryA.content.localeCompare(countryB.content, this.userLanguageService.getLanguage()));
  }
}
