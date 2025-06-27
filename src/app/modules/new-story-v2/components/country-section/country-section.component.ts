import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { GeolocationService } from '@app/core/services/geolocation/geolocation.service';
import { UserLanguageService } from '@app/core/services/locales/user-language.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { CountryModalComponent } from '@app/modules/new-story-v2/modals/country-modal/country-modal.component';
import { AutocompleteComponent } from '@app/shared/components/autocomplete/autocomplete.component';
import { BaseComponent } from '@app/shared/components/base.component';
import { CountriesService } from '@app/shared/services/countries.service';
import { ICountry } from '@core/services/api/model/location.model';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { flatMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'loop-country-section',
  templateUrl: './country-section.component.html',
  styleUrls: ['./country-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySectionComponent extends BaseComponent implements OnInit {
  @Input() control: UntypedFormControl;
  @Input() phoneInput: UntypedFormControl;
  @Input() showInputOnly: boolean;
  @ViewChild(AutocompleteComponent) countryInput: AutocompleteComponent;

  query: string;
  matchingCountries: IBaseEntityN[];
  countries: IBaseEntityN[] = [];
  autodetectedCountry: string | null = null;
  manualSelect = false;
  selectedCountry: string;
  private userTouchedCountry = false;
  private originalCountries: ICountry[];

  constructor(
    private translateService: TranslateService,
    private userLanguageService: UserLanguageService,
    private countriesService: CountriesService,
    private geoService: GeolocationService,
    private cd: ChangeDetectorRef,
    public ui: UIService,
    private modalService: ModalServiceV2,
  ) {
    super();
  }

  ngOnInit(): void {
    this.countriesService
      .getCountries(false)
      .pipe(
        take(1),
        flatMap((countries) => {
          this.originalCountries = countries;
          this.countries = countries.map((c) => ({
            id: c.code,
            name: this.translateService.instant(`country_name.${c.code}`),
            content: this.translateService.instant(`country_name.${c.code}`),
          })) as IBaseEntityN[];
          this.cd.markForCheck();

          return this.geoService.getUserCountry().pipe(
            tap((userCountry) => {
              if (userCountry.country) {
                this.autodetectedCountry = userCountry.country;
                this.selectedCountry = this.autodetectedCountry;
                this.patchPhonePrefix(this.selectedCountry, countries);
                this.countryInput.setDisabledState(true);
              }
              this.cd.markForCheck();
              this.refreshUserSelection(this.selectedCountry, true);
            }),
          );
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
    this.userLanguageService.languageChanged$
      .pipe(
        takeUntil(this.destroyed$),
        flatMap(() => this.translateService.onLangChange),
      )
      .subscribe(() => {
        this.refreshCountries();
        this.refreshUserSelection(this.selectedCountry, !this.userTouchedCountry);
      });
  }

  private refreshUserSelection(country: string, automatic = false): void {
    const translated = `${
      automatic ? `${this.translateService.instant('newStoryV2.form.country.yourLocation')} ` : ''
    }${this.translateService.instant(`country_name.${country}`)}`;
    this.countryInput.handleOptionClick({
      id: country,
      name: country ? translated : '',
    });
    this.countryInput.handleSelectClickOut();
  }

  private refreshCountries(): void {
    this.countries = this.countries.map((c) => {
      c.name = this.translateService.instant(`country_name.${c.id}`);
      c.content = this.translateService.instant(`country_name.${c.id}`);
      return c;
    });
  }

  handleQueryChange(query: string): void {
    this.query = query;
    this.matchingCountries = !query?.length
      ? this.countries
      : this.countries.filter((country) => this.translateService.instant(country.content.toLowerCase()).includes(query.toLowerCase()));

    this.cd.markForCheck();
  }

  changeClicked(): void {
    this.countryInput.setDisabledState(false);
    this.manualSelect = true;
    if (this.query?.indexOf(this.translateService.instant('newStoryV2.form.country.yourLocation')) !== -1) {
      this.selectedCountry = '';
      this.countryInput.handleOptionClick({
        id: null,
        name: '',
      });
    }
    timer(200)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.countryInput.focusInput();
      });
  }

  focusedOut(event?: Event): void {
    this.userTouchedCountry = true;
    const countryName = this.countries.find((pl) => pl.name === this.query)?.name;

    if (this.query !== countryName && !this.countryInput.shouldShowDropdown) {
      this.countryInput.handleOptionClick({
        id: this.selectedCountry,
        name: this.selectedCountry ? this.translateService.instant(`country_name.${this.selectedCountry}`) : '',
      });
      this.countryInput.handleSelectClickOut();
    }
  }

  revertAutodetectedCountry(event: Event): void {
    event?.stopPropagation();
    this.countryInput.handleSelectClickOut();
    this.manualSelect = false;
    this.selectedCountry = this.autodetectedCountry;
    this.countryInput.setDisabledState(true);
    this.refreshUserSelection(this.selectedCountry, true);
    this.cd.markForCheck();
  }

  onModalOpen(): void {
    this.modalService.open(CountryModalComponent);
  }

  private setControlValue(value: string): void {
    this.control.patchValue(value);
    this.control.markAsTouched();
  }

  private patchPhonePrefix(selectedCountry: string, countries: ICountry[]): void {
    this.phoneInput.patchValue(String(countries.find((country) => country.code === selectedCountry)?.prefix));
    this.cd.markForCheck();
  }
}
