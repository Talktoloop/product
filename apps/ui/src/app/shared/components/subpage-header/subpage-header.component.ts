import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { UserLanguageService } from '@app/core/services/locales/user-language.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loop-subpage-header',
  templateUrl: './subpage-header.component.html',
  styleUrls: ['./subpage-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubpageHeaderComponent {
  @Input() backUrl = { link: `/${MAIN_ROUTES.STORIES}`, text: 'newStoryV2.heading.allStories' };
  @Input() pageTitle: string;
  languageSelectOpen = false;
  selectedLanguage: string;
  constructor(
    private translateService: TranslateService,
    public ui: UIService,
    private userLanguageService: UserLanguageService,
    private cd: ChangeDetectorRef,
    public languageService: SupportedLanguagesService,
  ) {
    this.selectedLanguage = userLanguageService.getLanguage();
  }

  toggleLangSwitch(): void {
    this.languageSelectOpen = !this.languageSelectOpen;
    this.cd.markForCheck();
  }

  languageSwitch(lang: string): void {
    this.userLanguageService.setLanguage(lang);
    this.selectedLanguage = lang;
    this.translateService.use(this.userLanguageService.getLanguage());
    this.languageSelectOpen = false;
    window.location.reload();
    this.cd.markForCheck();
  }
}
