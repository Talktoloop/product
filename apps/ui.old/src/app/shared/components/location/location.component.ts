import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl } from '@angular/forms';

import { IHistoryAdministrativeData } from '@app/core/services/api/model/location.model';

import { StoryDetailsService } from '@app/modules/inbox/stories/story-details/story-details.service';

import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';

import { CountriesService } from '@app/shared/services/countries.service';

import { TranslateService } from '@ngx-translate/core';

import { AdministrationOptions } from '@shared/model/option.model';

import { debounceTime, map, take, takeUntil } from 'rxjs';

import { LocalStorageKeys, LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { BaseComponent } from '../base.component';

export interface RegionData {
  regionId: number;
  countryId: number;
  country: string;
}

export interface MultiRegionData {
  regionIds: number[];
  countries: string[];
  semiClicked: number[];
  selectedRegionsOrCountries: AdministrationOptions[];
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent extends BaseComponent implements OnInit {
  readonly LocalStorageKeys = LocalStorageKeys;
  @Input() place: string;
  @Input() countryCode: string;
  @Input() isOnlyDropdown = false;
  @Input() countryId: number = null;
  @Input() onlyWithStories = false;
  @Input() getOnlyAlreadyUsedLocations = false;
  @Input() canChooseMoreThanOne = false;
  @Input() storiesAvailable = true;
  @Output() totalSelectedChange = new EventEmitter<number>();
  @Output() data$ = new EventEmitter<RegionData>();
  @Output() multiData$ = new EventEmitter<MultiRegionData>();
  @Input() semiClicked = new Array<number>();
  @Input() set selectedRegionsOrCountries(administrationOptions: AdministrationOptions[]) {
    this.selectedRegionsOrCountriesControl.setValue(administrationOptions);
  }
  selectedRegionsOrCountriesControl = new FormControl<AdministrationOptions[]>([]);

  LoopIcon = LoopIcon;
  openDropdown = false;
  regionId: number | null = null;
  searchLocation = new FormControl();
  countries: AdministrationOptions[] = [];
  list: Array<AdministrationOptions> = [];
  listOfLastLocation: Array<AdministrationOptions> = [];
  countryLabel: string = null;
  parentName: string = null;
  history: Array<IHistoryAdministrativeData> = [];
  inputId = crypto.randomUUID();
  highestCountryId: number;
  showAnimationRight = false;
  showAnimationLeft = false;
  applyLocation = false;
  isInfoActive = true;
  noChild = false;
  isMobile = false;

  constructor(
    private storyDetailsService: StoryDetailsService,
    private countriesService: CountriesService,
    private translateService: TranslateService,
    private localstorage: LocalStorageService,
    private cdr: ChangeDetectorRef,
  ) {
    super();
  }

  get location(): string {
    const countryName = this.translateService.instant(`country_name.${this.storyDetailsService.story.country}`);
    return `${this.place}, ${countryName}`;
  }

  ngOnInit(): void {
    if (this.selectedRegionsOrCountries?.length) {
      this.selectedRegionsOrCountriesControl.setValue(this.selectedRegionsOrCountries);
    }

    if (this.semiClicked?.length) {
      this.semiClicked = [...this.semiClicked];
    }
    this.isInfoActive = !this.localstorage.get(LocalStorageKeys.LOCATION_COMPONENT_READ);
    this.setCountries();
    this.searchLocation.valueChanges.pipe(debounceTime(350)).subscribe((value) => {
      if (value === null) {
        return;
      }
      if (!value) {
        this.regionId = null;
      }
      if (value.length >= 3) {
        if (!this.countryId) {
          this.searchCountry(value);
        }

        if (this.countryId) {
          this.searchAdministrativeData(value);
        }
      }

      if (value.length < 3 && !this.countryId) {
        this.setCountries();
      }

      if (value.length < 3 && this.countryId) {
        this.list = this.listOfLastLocation;
      }
      this.cdr.detectChanges();
    });
    this.checkMobileStatus();

    window.addEventListener('resize', () => {
      this.checkMobileStatus();
    });
  }

  getPlaceholder(): string {
    return this.translateService.instant(
      this.countryId && this.history.length > 0 ? 'filtersV2.location.searchForPlace' : 'filtersV2.location.searchForCountry',
    );
  }

  clearSearch($event: MouseEvent): void {
    $event.stopImmediatePropagation();
    this.searchLocation.reset();
    if (!this.countryId) {
      this.setCountries();
    }
    if (this.countryId) {
      this.list = this.listOfLastLocation;
    }
  }

  searchCountry(value: string): void {
    this.list = this.countries.filter((country) => {
      return country.content.toLowerCase().includes(value.toLowerCase());
    });
    this.cdr.detectChanges();
  }

  searchAdministrativeData(value: string): void {
    this.countriesService
      .searchAdministrativeData(this.countryId, value, this.regionId, this.getOnlyAlreadyUsedLocations)
      .pipe(
        take(1),
        takeUntil(this.destroyed$),
        map((searchAdministrativeData) => {
          const parentNames = [];
          return searchAdministrativeData.map((date) => {
            const item = {
              id: date.id,
              parentId: date.parentId,
              parentName: !parentNames.find((parentName) => parentName === date.parentName) ? date.parentName : null,
              content: date.name,
              numberOfStories: date.numberOfStories,
              hasChild: date.hasChild,
            };

            if (date.parentName) {
              parentNames.push(date.parentName);
            }

            return item;
          });
        }),
      )
      .subscribe((searchAdministrativeData) => {
        this.list = searchAdministrativeData.filter((country) => {
          return country.content.toLowerCase().includes(value.toLowerCase());
        });
        this.cdr.detectChanges();
      });
  }

  openLocation(): void {
    this.openDropdown = true;
  }

  closeLocation(): void {
    this.openDropdown = false;
  }

  checkMobileStatus(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  handleRadioClick(item: AdministrationOptions, event: MouseEvent): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (item.numberOfStories === 0 && this.canChooseMoreThanOne) {
      return;
    }
    let actualValue = this.selectedRegionsOrCountriesControl.value;
    if (this.canChooseMoreThanOne) {
      actualValue = this.clearChildElementsIfSelectedBefore(item, actualValue);
      const isItemExist = actualValue.find((value: AdministrationOptions) => value.id === item.id);
      if (isItemExist) {
        actualValue = actualValue.filter((value: AdministrationOptions) => value.id !== item.id);
        /* Clear all parents as semi clicked when child unselected */
        this.history.forEach((historyItem: IHistoryAdministrativeData) => {
          const foundSemiClickedIdIndex = this.semiClicked.findIndex((semiClickedId) => semiClickedId !== historyItem.id);
          this.semiClicked.splice(foundSemiClickedIdIndex, 1);
        });
      } else {
        const semiClicked = [];

        /* Display all parents as semi clicked when child selected */
        this.history.forEach((historyItem: IHistoryAdministrativeData) => {
          this.semiClicked.push(historyItem.id);
          semiClicked.push(historyItem.id);
        });

        /* Save history of semi selected parents to item */
        item.semiClicked = semiClicked;

        actualValue = this.addCountryIfNoExist(item, actualValue);
        actualValue.push(item);
      }
    } else {
      actualValue = [item];
    }
    this.selectedRegionsOrCountriesControl.setValue(actualValue);
    this.multiData$.emit(<MultiRegionData>{
      regionIds: this.getRegionIds(this.selectedRegionsOrCountriesControl.value),
      countries: this.getCountryCodes(this.selectedRegionsOrCountriesControl.value),
      semiClicked: this.semiClicked,
      selectedRegionsOrCountries: this.selectedRegionsOrCountriesControl.value,
    });
    this.cdr.detectChanges();
  }

  submitForm(apply: boolean = false): void {
    this.applyLocation = true;
    const regionOrCountry = this.selectedRegionsOrCountriesControl.value;
    if (this.getLast(regionOrCountry)?.id <= this.highestCountryId) {
      this.countryId = this.getLast(regionOrCountry)?.id;
      this.countryCode = this.getLast(regionOrCountry)?.value;
    } else {
      this.regionId = this.getLast(regionOrCountry)?.id;
    }

    const contents = this.history;
    if (contents.length) {
      contents.push({ parent: this.getLast(regionOrCountry) } as never);
    }

    if (this.canChooseMoreThanOne) {
      this.multiData$.emit(<MultiRegionData>{
        regionIds: this.getRegionIds(this.selectedRegionsOrCountriesControl.value),
        countries: this.getCountryCodes(this.selectedRegionsOrCountriesControl.value),
        semiClicked: this.semiClicked,
        selectedRegionsOrCountries: this.selectedRegionsOrCountriesControl.value,
        apply,
      });
    } else {
      this.data$.emit(<RegionData>{
        regionId: this.regionId,
        countryId: this.countryId,
        country: this.countryCode,
        apply,
      });
    }

    this.openDropdown = false;
    this.cdr.detectChanges();
  }

  setCountryLabelValue(): void {
    const selectedCountry = this.countries.find((country) => country.id === this.countryId);
    this.countryLabel = selectedCountry.content;
  }

  setLabelValue(name: string): void {
    this.parentName = name;
    this.cdr.detectChanges();
  }

  removeSelectedLocation(): void {
    this.selectedRegionsOrCountriesControl.setValue([]);
    if (this.storyDetailsService.story) {
      this.storyDetailsService.story.place = null;
    }
    this.searchLocation.reset();
    this.applyLocation = false;
    this.parentName = null;
    this.countryLabel = null;
    this.regionId = null;
    this.countryId = null;
    this.countryCode = null;
    this.history = [];
    if (this.canChooseMoreThanOne) {
      this.multiData$.emit(<MultiRegionData>{
        regionIds: [],
        countries: [],
        semiClicked: [],
        selectedRegionsOrCountries: [],
      });
    } else {
      this.data$.emit(<RegionData>{
        regionId: null,
        countryId: null,
        country: null,
      });
    }

    this.setCountries();
    this.cdr.detectChanges();
  }

  setAdministrativeData(
    $event: MouseEvent,
    id: number,
    countryCode: string,
    isCountry: boolean,
    parent?: AdministrationOptions,
    scrollToTop?: boolean,
    isBack?: boolean,
  ): void {
    $event.stopImmediatePropagation();
    this.regionId = null;
    this.searchLocation.reset();

    if (parent.numberOfStories === 0 && this.canChooseMoreThanOne) {
      return;
    }

    if (!isBack) {
      this.history.push({
        id,
        countryCode: countryCode ? countryCode : this.countryCode,
        isCountry,
        parent,
      });
    }

    if (isCountry) {
      this.countryId = id;
      this.countryCode = countryCode;
      this.setCountryLabelValue();
      this.cdr.detectChanges();
    }

    if (!isCountry) {
      this.regionId = parent.id;
    } else {
      this.regionId = undefined;
    }
    this.cdr.detectChanges();

    this.countriesService
      .getAdministrativeData(this.countryId, this.getOnlyAlreadyUsedLocations, this.regionId)
      .pipe(
        map((administrativeData) =>
          administrativeData.map((date) => {
            return {
              id: date.id,
              content: date.name,
              numberOfStories: date.numberOfStories,
              hasChild: date.hasChild,
            };
          }),
        ),
      )
      .subscribe((administrativeData) => {
        if (scrollToTop) {
          const container = document.querySelector('.form-groups-wrapper');
          const mobileContainer = document.querySelector('.mobile-scroll');
          if (container) {
            container.scrollTo(0, 0);
          }
          if (mobileContainer) {
            mobileContainer.scrollTo(0, 0);
          }
        }
        const hasChildElement = administrativeData.some((item) => item.hasChild);
        const allElementsHaveZeroStories = administrativeData.every((item) => item.numberOfStories === 0);
        if ((this.canChooseMoreThanOne && allElementsHaveZeroStories) || !hasChildElement) {
          this.noChild = true;
        } else {
          this.noChild = false;
        }

        if (!isCountry) {
          this.setLabelValue(parent.content);
        } else {
          this.parentName = null;
        }
        if (isBack) {
          this.showAnimationRight = false;
          this.showAnimationLeft = true;
        }
        if (!isBack) {
          this.showAnimationRight = true;
          this.showAnimationLeft = false;
        }
        this.list = administrativeData;
        this.listOfLastLocation = administrativeData;
        this.cdr.detectChanges();
        this.showAnimationRight = false;
        this.showAnimationLeft = false;
      });
  }

  private setCountries(): void {
    this.countriesService
      .getCountries(this.onlyWithStories)
      .pipe(
        take(1),
        takeUntil(this.destroyed$),
        map((countries) =>
          countries.map((country) => {
            return {
              id: country.id,
              value: country.code,
              content: this.translateService.instant(`country_name.${country.code}`),
              numberOfStories: country.numberOfStories,
              hasChild: country.hasChild,
            };
          }),
        ),
      )
      .subscribe((countries) => {
        this.showAnimationLeft = false;
        this.highestCountryId = this.getHighestId(countries);
        this.countries = countries.sort((a, b) => a.content.localeCompare(b.content, this.translateService.currentLang));
        this.list = countries;
        this.countryLabel = null;
        this.cdr.detectChanges();
      });
  }

  getHighestId(objects: { id: number }[]): number | null {
    if (objects.length === 0) {
      return null;
    }

    let highestId = Number.MIN_SAFE_INTEGER;
    for (const obj of objects) {
      if (obj.id > highestId) {
        highestId = obj.id;
      }
    }
    return highestId;
  }

  private getLast<T>(arr: Array<T>) {
    return arr ? arr[arr.length - 1] : undefined;
  }

  private getCountryCodes(options: AdministrationOptions[]): Array<string> {
    const countryCodes: string[] = [];

    for (const option of options) {
      if (option.id <= this.highestCountryId) {
        countryCodes.push(option.value);
      }
    }

    return countryCodes;
  }

  private getRegionIds(options: AdministrationOptions[]): Array<number> {
    const regionIds: number[] = [];

    for (const option of options) {
      if (option.id > this.highestCountryId) {
        regionIds.push(option.id);
      }
    }

    return regionIds;
  }

  isItemSelected(item: AdministrationOptions) {
    return (
      this.selectedRegionsOrCountriesControl.value.find((selected: AdministrationOptions) => selected.id === item.id) &&
      item.id &&
      !this.idChildItemSelected(item)
    );
  }

  idChildItemSelected(administrationOption: AdministrationOptions) {
    return this.semiClicked.includes(administrationOption.id);
  }

  private clearChildElementsIfSelectedBefore(item: AdministrationOptions, actualValue: AdministrationOptions[]) {
    actualValue = actualValue.filter((administrationOption: AdministrationOptions) => {
      const isChildAlreadySelected = administrationOption.semiClicked.includes(item.id);
      if (isChildAlreadySelected) {
        administrationOption.semiClicked.forEach((semiClicked: number) => {
          const foundSemiClickedIdIndex = this.semiClicked.findIndex((foundSemiClickedId: number) => foundSemiClickedId !== semiClicked);
          this.semiClicked.splice(foundSemiClickedIdIndex, 1);
        });
      }
      return !isChildAlreadySelected;
    });

    return actualValue;
  }

  private addCountryIfNoExist(item: AdministrationOptions, actualValue: AdministrationOptions[]) {
    if (item.id > this.highestCountryId && !actualValue.find((item) => item.id === this.history[0].parent.id)) {
      const countryToAdd = this.history[0].parent;
      countryToAdd.semiClicked = [];
      actualValue.push(countryToAdd);
    }

    return actualValue;
  }

  onInfoSubmit() {
    this.isInfoActive = false;
    this.localstorage.set(LocalStorageKeys.LOCATION_COMPONENT_READ, true);
  }

  currentFiltersCount(): number {
    return this.selectedRegionsOrCountriesControl.value?.length || 0;
  }

  backClicked(event: Event): void {
    event.preventDefault();
    event.stopImmediatePropagation();

    if (!this.history.length) return;

    this.showAnimationRight = false;
    this.showAnimationLeft = true;

    setTimeout(() => {
      this.history.pop();

      if (this.history.length) {
        const prevItem = this.history[this.history.length - 1];

        this.regionId = prevItem.id;
        this.countryCode = prevItem.countryCode;
        this.parentName = prevItem.parent?.content || null;

        const parentId = prevItem.parent?.id === this.countryId ? null : prevItem.parent?.id;

        this.countriesService
          .getAdministrativeData(this.countryId, this.getOnlyAlreadyUsedLocations, parentId)
          .pipe(
            map((data) =>
              data.map(({ id, name, numberOfStories, hasChild }) => ({
                id,
                content: name,
                numberOfStories,
                hasChild,
              }))
            )
          )
          .subscribe((adminData) => {
            this.list = this.listOfLastLocation = adminData;
            this.noChild = !adminData.some((item) => item.hasChild);

            this.showAnimationLeft = false;
            this.showAnimationRight = false;
            this.cdr.detectChanges();
          });
      } else {

        Object.assign(this, {
          regionId: null,
          countryCode: null,
          parentName: null,
          list: this.countries,
          noChild: false
        });
        this.showAnimationLeft = false;
        this.showAnimationRight = false;
        this.cdr.detectChanges();
      }
    }, 260);
  }

  handleBackButtonBlur(): void {
    const firstElementOfList = (document.getElementsByClassName('form-groups-wrapper')[0]?.children?.[0] as HTMLElement)
      ?.children[0] as HTMLElement;
    if (firstElementOfList) {
      firstElementOfList.focus();
      firstElementOfList.blur();
    }
  }
}
