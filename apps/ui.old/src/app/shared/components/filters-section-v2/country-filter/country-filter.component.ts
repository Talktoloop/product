import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { ControlValueAccessorBase } from '@app/shared/utils/control-value-accessor-base';
import { TranslateService } from '@ngx-translate/core';
import { take, takeUntil, tap } from 'rxjs/operators';
import { CountriesService } from '../../../services/countries.service';
import { AutocompleteComponent } from '../../autocomplete/autocomplete.component';

@Component({
  selector: 'loop-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryFilterComponent extends ControlValueAccessorBase<string> implements OnInit {
  @Input() flat = false;
  @Input() title: string;

  @ViewChild(AutocompleteComponent) autoComplete: AutocompleteComponent;

  countries: IBaseEntityN[] = [];
  matchingCountries: IBaseEntityN[];
  query: string;

  constructor(
    private countriesService: CountriesService,
    private translateService: TranslateService,
    protected ngControl: NgControl,
    private cd: ChangeDetectorRef,
    protected injector: Injector,
  ) {
    super(ngControl, injector);
  }

  ngOnInit(): void {
    this.countriesService
      .getCountries(false)
      .pipe(
        take(1),
        tap((countries) => {
          this.countries = countries.map((c) => ({
            id: c.code,
            name: this.translateService.instant(`country_name.${c.code}`),
            content: this.translateService.instant(`country_name.${c.code}`),
          })) as IBaseEntityN[];
          this.matchingCountries = this.countries;
          this.cd.detectChanges();
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  handleQueryChange(query: string): void {
    this.query = query;
    this.matchingCountries = !query?.length
      ? this.countries
      : this.countries.filter((country) => this.translateService.instant(country.content.toLowerCase()).includes(query.toLowerCase()));

    this.cd.markForCheck();
  }
}
