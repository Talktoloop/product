import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';
import { TranslateService } from '@ngx-translate/core';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'loop-language-filter',
  templateUrl: './language-filter.component.html',
  styleUrls: ['./language-filter.component.scss'],
})
export class LanguageFilterComponent {
  @Input() controlName: string;
  @Input() flat = false;
  @Input() form: UntypedFormGroup;
  @Input() title: string;

  options$ = this.languageService.getSupportedLanguages().pipe(
    take(1),
    map((languages) => languages.sort((a, b) => a.language.localeCompare(b.language))),
    map((languages: ISupportedLanguage[]) => {
      const languageList = [];

      for (const language of languages) {
        languageList.push({
          code: this.translateService.instant(`languages.${language.language}`),
          id: language.id.toString(),
          checked: false,
          name: language.language,
        } as IBaseEntityDN);
      }

      return languageList;
    }),
  );

  constructor(private languageService: SupportedLanguagesService, private translateService: TranslateService) {}
}
