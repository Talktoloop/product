import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { NgControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ICountry } from '@core/services/api/model/location.model';
import { TranslateService } from '@ngx-translate/core';
import { ControlValueAccessorBase } from '@shared/utils/control-value-accessor-base';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CountriesService } from '../../services/countries.service';
import { FormHelperService } from '../../services/form-helper.service';

interface CountryOption extends ICountry {
  name: Observable<string>;
}

function phoneNumberValidator(): ValidatorFn {
  const MIN_LENGTH = 4;
  const MAX_LENGTH = 16;
  return (control) => {
    const value = control?.value?.replaceAll(/ /gm, '');
    if (!value?.length) {
      return undefined;
    } else if (value?.length < MIN_LENGTH) {
      return { minlength: { requiredLength: MIN_LENGTH, actualLength: value?.length } };
    } else if (value?.length > MAX_LENGTH) {
      return { maxlength: { requiredLength: MAX_LENGTH, actualLength: value?.length } };
    }
  };
}

function phoneFormValidator(): ValidatorFn {
  return (control: UntypedFormGroup): ValidationErrors | null => {
    const prefixControl: UntypedFormControl = control.get('prefix') as UntypedFormControl;
    const { prefix, phoneNumber } = control.value;

    if (!prefix && !phoneNumber) {
      prefixControl.setErrors(null);
      return undefined;
    }

    const error = { missingPrefix: true };
    if (!isNaN(phoneNumber) && (isNaN(prefix) || !prefix)) {
      prefixControl.setErrors(error);
      prefixControl.markAsTouched();
      prefixControl.markAsDirty();
      return error;
    }
  };
}

@Component({
  selector: 'loop-phone-picker',
  templateUrl: './phone-picker.component.html',
  styleUrls: ['./phone-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhonePickerComponent extends ControlValueAccessorBase<string> implements OnInit, OnDestroy {
  countries: CountryOption[];
  dropDownOpen = false;
  selectedCountryCode: string;
  selectedCountry: ICountry;

  phoneNumberForm: UntypedFormGroup = new UntypedFormGroup(
    {
      prefix: new UntypedFormControl(''),
      phoneNumber: new UntypedFormControl('', phoneNumberValidator()),
    },
    [phoneFormValidator()],
  );

  get prefixControl(): UntypedFormControl {
    return this.phoneNumberForm.get('prefix') as UntypedFormControl;
  }

  get numberControl(): UntypedFormControl {
    return this.phoneNumberForm.get('phoneNumber') as UntypedFormControl;
  }

  get prefixInvalid(): boolean {
    return this.formHelperService.getIsInvalid(this.prefixControl);
  }

  get prefixError$(): Observable<string> {
    return this.formHelperService.getControlError(this.prefixControl);
  }

  get phoneInputInvalid(): boolean {
    return this.formHelperService.getIsInvalid(this.numberControl);
  }

  get phoneInputError$(): Observable<string> {
    return this.formHelperService.getControlError(this.numberControl);
  }

  get isAndroidOperatingSystem(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;

    return /android/i.test(userAgent);
  }

  private destroy$ = new Subject<void>();

  constructor(
    private countriesService: CountriesService,
    private translateService: TranslateService,
    private cd: ChangeDetectorRef,
    private formHelperService: FormHelperService,
    protected ngControl: NgControl,
    protected injector: Injector,
  ) {
    super(ngControl, injector);
  }

  ngOnInit(): void {
    this.setCountriesOptions();
    this.listenToFormChange();

    this.phoneNumberForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.control.setErrors(null);
      } else {
        this.control.setErrors({ ...this.phoneNumberForm.errors, ...this.prefixControl.errors, ...this.numberControl.errors });
      }
    });
  }

  private setCountriesOptions(): void {
    const COUNTRY_NAMES_KEY = 'country_name';
    const countriesNamesTranslation$ = this.translateService.onLangChange.pipe(
      startWith(() => this.translateService.instant(COUNTRY_NAMES_KEY)),
      switchMap(() => this.translateService.get(COUNTRY_NAMES_KEY)),
    );
    combineLatest([
      this.countriesService.getCountries().pipe(
        tap((countries) => {
          this.selectedCountry = countries?.find((country) => String(country.prefix) === this.prefixControl.value);
          this.selectedCountryCode = this.selectedCountry?.code;
          this.cd.detectChanges();
        }),
      ),
      countriesNamesTranslation$,
    ])
      .pipe(
        map(([countries, translations]): CountryOption[] => {
          const options = countries.map((country) => ({
            ...country,
            name: translations[country.code],
          }));
          options.sort((countryA, countryB) => countryA.name?.localeCompare(countryB?.name));
          return options;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((countries) => {
        this.countries = countries;
        this.cd.detectChanges();
      });
  }

  private listenToFormChange(): void {
    this.phoneNumberForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateValue();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private prePopulateFields(value: string): void {
    if (!value) {
      return;
    }
    const [prefix, phoneNumber] = value.split(' ');
    this.phoneNumberForm.patchValue({ prefix, phoneNumber });
    this.cd.detectChanges();
  }

  trackByFn(_, item: ICountry): any {
    return item.code;
  }

  handleSelectorOpenClick(): void {
    this.dropDownOpen = !this.dropDownOpen;
    this.cd.detectChanges();
  }

  handleOutsideInputClick(): void {
    this.dropDownOpen = false;
    this.cd.detectChanges();
  }

  handleOptionClick(country: ICountry): void {
    this.prefixControl.patchValue(String(country.prefix));
    this.selectedCountryCode = country.code;
    this.selectedCountry = country;
    this.dropDownOpen = false;
    this.cd.detectChanges();
  }

  handleSelectedOptionClick(): void {
    this.dropDownOpen = false;
    this.cd.detectChanges();
  }

  updateValue(): void {
    const { prefix, phoneNumber } = this.phoneNumberForm.value;
    if (!prefix || !phoneNumber) {
      super.writeValue(null);
      this.onChange?.(null);
      return;
    }

    const onlyAllowedCharacters = phoneNumber.match(/[0-9]/gm).join('');
    const value = `${prefix} ${onlyAllowedCharacters}`;
    super.writeValue(value);
    this.onChange?.(value);
    this.cd.detectChanges();
  }

  writeValue(value: string): void {
    super.writeValue(value);
    this.prePopulateFields(value);
  }

  getCountryNameCode(code: string): string {
    return `country_name.${code.toLowerCase()}`;
  }
}
