import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { FiltersService } from '@core/services/filters/filters.service';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { UIService } from '@core/services/ui/ui.service';
import { AsidePosition, AsideService } from '@shared/components/aside/aside.service';
import { BaseComponent } from '@shared/components/base.component';
import { FilterPillComponent } from '@shared/components/filters-section-v2/filter-pill/filter-pill.component';
import { FilterType, IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { FiltersModalComponent } from '@shared/components/filters-section-v2/filters-modal/filters-modal.component';
import { FormHelperService } from '@shared/services/form-helper.service';
import { mapToBackendModel } from '@shared/utils/filters.utils';
import { anyControlHasValue } from '@shared/utils/forms.utils';
import { isArray } from 'lodash';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loop-filter-section-v2',
  templateUrl: './filter-section-v2.component.html',
  styleUrls: ['./filter-section-v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSectionV2Component extends BaseComponent implements OnInit {
  @ViewChild('allStories') allStoriesRef: TemplateRef<any>;
  @ViewChildren(FilterPillComponent) pills: QueryList<FilterPillComponent>;
  @Input() showAllStoriesButton = false;
  @Input() storiesCount: number;
  private filteringInProgress = false;
  resetFiltersEvent = new EventEmitter<void>();
  filterCounter = 0;
  searchTerm: string;
  @Output() filtersChanged = new EventEmitter<any>();


  @Input() set config(conf: IFilterV2<any>[]) {
    if (conf) {
      this._config = conf;
      !this.form && this.initForm();
      setTimeout(() => {
        this.takeCareOfFiltersInQueryParams();
      });
    }
  }

  get config(): IFilterV2<any>[] {
    return this._config;
  }

  get showClearAllButton(): boolean {
    return this._showClearAllPreventChange ? this._clearAllVisible : this.anyFilterSelected;
  }

  get anyFilterSelected(): boolean {
    const formKeys = Object.keys(this.form.controls);
    return formKeys.length && formKeys.some((key) => anyControlHasValue(this.form.get(key)));
  }

  private _config: IFilterV2<any>[];
  private _showClearAllPreventChange = false;
  private _clearAllVisible = false;
  protected readonly FilterType = FilterType;

  form: UntypedFormGroup;
  formCopy: any;
  redrawMenu$ = new Subject<boolean>();
  dropdownOpen: boolean;
  isModal: boolean;
  modalOpen: boolean;
  regionId: number;
  currentPill: FilterPillComponent;
  currentFilterTitle: string;
  currentPillIndex: number;
  dropdownStates = {};
  isAuthenticated: boolean;
  isScrolled = false;
  isInboxOrOutbox = false;

  constructor(
    public ui: UIService,
    private asideService: AsideService,
    private cd: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private filtersService: FiltersService,
    private formHelper: FormHelperService,
    private modalService: ModalServiceV2,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn();
    setTimeout(() => this.redrawMenu$.next(true), 1);
    this.filtersService.redrawFiltersComp$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.cd.detectChanges());
    this.isInboxOrOutbox = ['statistics', 'inbox', 'outbox'].includes(this.router.url.split('/')[1]);
  }

  getPillTranslationKey(config: IFilterV2<any>): string {
    if (config.type === FilterType.BOOLEAN && !this.getForm(config).value) {
      return config.falseValueTranslationKey;
    }

    return config.translationKey;
  }

  initFiltersFromSessionStorage(): void {
    const setValueToForm = (singleConfig: IFilterV2<any>, valueFromStorage: any, key?: string) => {
      singleConfig.mapValueFromStorage
        ? this.form.patchValue(singleConfig.mapValueFromStorage?.(key, valueFromStorage, true))
        : this.form.get(singleConfig.internalName).patchValue(valueFromStorage);
    };

    const getValueFromStorage = (key: string) => JSON.parse(sessionStorage.getItem(key));

    this.config.forEach((singleConfig) => {
      if (singleConfig.sessionStorageKey) {
        if (singleConfig.type === FilterType.REGION) {
          const region = {};
          if (Array.isArray(singleConfig.sessionStorageKey)) {
            singleConfig.sessionStorageKey.forEach((key) => {
              region[key] = getValueFromStorage(key);
            });
          }
          this.form.get(singleConfig.internalName).patchValue(region);
        } else {
          if (Array.isArray(singleConfig.sessionStorageKey)) {
            singleConfig.sessionStorageKey.forEach((key) => setValueToForm(singleConfig, getValueFromStorage(key), key));
          } else {
            setValueToForm(singleConfig, getValueFromStorage(singleConfig.sessionStorageKey), singleConfig.sessionStorageKey);
            if (singleConfig.internalName.includes('SearchText')) {
              this.setSearchTermValue(getValueFromStorage(singleConfig.sessionStorageKey));
            }
          }
        }
      }
    });

    const cleanValue = this.cleanEmptyCollections(this.form.value);
    this.filtersService.userFilters = mapToBackendModel(this.config, cleanValue);
    this.filterCounter = this.updateFilterCounter(this.filtersService.userFilters);

    this.performFiltering();

    this.cd.detectChanges();
  }

  onModalOpen(isAllFilters = true): void {
    this.modalOpen = true;
    this.currentPillIndex = -1;
    this.dropdownStates = {};
    this.formCopy = { ...this.form.value };
    const modal = this.modalService.open(FiltersModalComponent, { isAllFilters });
    modal.form = this.form;
    modal.config = this.config;
    modal.regionId = this.regionId;
    if (!isAllFilters) {
      modal.invisibleControls = this.pills
        .filter((pill) => !!pill.internalName && !pill.visible && !!pill.internalName.includes('SearchText'))
        .map((pill) => pill.internalName);
    }

    modal.clearAll.pipe(takeUntil(modal.close$)).subscribe(() => {
      this.onFiltersClear();
      // Update modal with fresh data
      modal.form = this.form;
      modal.regionId = this.regionId;
    });
    modal.regionIdChanged.pipe(takeUntil(modal.close$)).subscribe((regionId: number) => this.onRegionIdChanged(regionId));
    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe(() => this.onFiltersChange());
    modal.close$.pipe(take(1), takeUntil(modal.confirm)).subscribe(() => this.onClickOutside());

    this._showClearAllPreventChange = true;
  }

  onRegionIdChanged(value: number): void {
    this.regionId = value;
    setTimeout(() => {
      this.dropdownOpen = false;
      this.onPillsVisibleChange(this.dropdownOpen);
    }, 300);
  }

  onFiltersClear(): void {
    this.dropdownStates = {};
    this.dropdownOpen = false;
    this.onPillsVisibleChange(this.dropdownOpen);
    this.currentPill = null;
    this.currentPillIndex = -1;

    this.form.reset({
      region: {
        regionIds: [],
        countries: [],
        semiClicked: [],
        selectedRegionsOrCountries: [],
      },
    });
    this.initForm();
    setTimeout(() => this.redrawMenu$.next(true), 1);
    this.formCopy = null;
    this.cd.detectChanges();
    this.removeKeysFromSessionStorage(this.config);
    this.filtersService.resetUserFilters();
    this.filterCounter = 0;
    this.setSearchTermValue('');
    this.resetFiltersEvent.emit();
    this.filtersChanged.emit(this.filtersService.userFilters);
  }

  onFiltersChange(): void {
    this.filteringInProgress = true;
    this.formHelper.markAllAsDirty(this.form);
    this.formHelper.updateValueAndValidity(this.form);

    if (this.form.valid) {
      this.dropdownStates = {};
      this.currentPill = null;
      this.currentPillIndex = -1;
      this.dropdownOpen = false;
      this.onPillsVisibleChange(this.dropdownOpen);
      this._showClearAllPreventChange = false;
      this.performFiltering();
      setTimeout(() => this.redrawMenu$.next(true), 1);
      this.modalOpen = false;
    }
    this.filtersChanged.emit(this.filtersService.userFilters);
  }

  onFilterClick(index: number): void {
    const selectedConfig = this.visibleConfig[index];
    this.currentFilterTitle = this.getPillTranslationKey(selectedConfig);
    this.currentPill = this.pills.toArray()[index];
    this.formCopy = { ...this.form.value };

    if (selectedConfig.type === FilterType.BOOLEAN) {
      this.currentPill.formData.patchValue(!this.currentPill.formData.value);
      this.onFiltersChange();
      return;
    }

    if (this.dropdownStates[index]) {
      this.dropdownStates[index] = false;
      this.currentPillIndex = -1;
      this.currentPill = null;
    } else {
      if (this.currentPillIndex !== -1) {
        this.dropdownStates[this.currentPillIndex] = false;
        this.cd.detectChanges();
      }

      this.dropdownStates[index] = true;
      this.currentPillIndex = index;
      this.cd.detectChanges();
    }
  }

  onClickOutside(): void {
    this.currentPill = null;
    this.currentPillIndex = -1;
    this.dropdownStates = {};
    if (this.formCopy) {
      const updatedForm = { ...this.formCopy, ...this.form.value };
      this.form.patchValue(updatedForm, { emitEvent: false });
    } else {
      this.form.reset();
      this.initForm();
    }

    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.formCopy = null;
    this._showClearAllPreventChange = false;
    setTimeout(() => this.redrawMenu$.next(true), 1);
    this.modalOpen = false;
  }

  onClickInside(targetElement: EventTarget): void {
    if (targetElement instanceof HTMLElement || targetElement instanceof ElementRef) {
      const element = targetElement instanceof ElementRef ? targetElement.nativeElement : targetElement;
      const isPillButton = element.closest('.pill-button') !== null;

      if (isPillButton) {
        return;
      } else if (Object.keys(this.dropdownStates).length && !this.dropdownStates.hasOwnProperty(this.currentPillIndex)) {
        this.onClickOutside();
      } else if (!this.currentPill && !Object.keys(this.dropdownStates).length) {
        this.dropdownOpen = false;
        this.onPillsVisibleChange(this.dropdownOpen);
      }
    }
  }

  hasValue(filterConfig: IFilterV2<any>): boolean {
    const control = this.form.get(filterConfig.internalName);
    const controlValue = control?.value;
    return control && control instanceof UntypedFormGroup
      ? Object.values(controlValue).some((val) => !!val)
      : typeof controlValue === 'object'
      ? this.anyObjectKeyHasValue(controlValue)
      : !!controlValue;
  }

  hasMoreFiltersValue(): boolean {
    // Check whether invisible filters (more filters) have any value
    const invisiblePillsInternalNames: string[] = this.pills
      ?.filter((pill) => pill.isInvisible && pill.config?.internalName)
      .map((pill) => pill.config?.internalName);
    if (invisiblePillsInternalNames) {
      const filteredFiltersConfigs = this.config.filter((filterConfig) => {
        return invisiblePillsInternalNames.includes(filterConfig.internalName);
      });
      return filteredFiltersConfigs.some((config) => this.hasValue(config));
    }
    return false;
  }

  private performFiltering(): void {
    const queryParamsMap = new Map<string, string>();
    this.config.forEach((singleConfig) => {
      if (Array.isArray(singleConfig.sessionStorageKey)) {
        singleConfig.sessionStorageKey.forEach((key) => {
          const value = this.form.value[singleConfig.internalName]?.[key];
          sessionStorage.setItem(key, singleConfig.mapValueToStorage?.(value, singleConfig.data) || JSON.stringify(value));
          queryParamsMap.set(key, singleConfig.mapValueToStorage?.(value, singleConfig.data) || JSON.stringify(value));
        });
      } else {
        const value = this.form.value[singleConfig.internalName];
        sessionStorage.setItem(
          singleConfig.sessionStorageKey,
          singleConfig.mapValueToStorage?.(value, singleConfig.data) || JSON.stringify(value),
        );
        queryParamsMap.set(
          singleConfig.sessionStorageKey,
          singleConfig.mapValueToStorage?.(value, singleConfig.data) || JSON.stringify(value),
        );
      }
    });

    this.filtersService.queryParamsObject = Object.fromEntries(queryParamsMap);
    this.addToQueryParams(this.filtersService.queryParamsObject);
    const cleanValue = this.cleanEmptyCollections(this.form.value);
    this.filtersService.userFilters = mapToBackendModel(this.config, cleanValue);
    this.filteringInProgress = false;
    this.filterCounter = this.updateFilterCounter(this.filtersService.userFilters);
  }

  private addToQueryParams(queryParamsMap: { [p: string]: string }) {
    for (const queryParamsMapKey in queryParamsMap) {
      if (
        queryParamsMap[queryParamsMapKey] === 'null' ||
        queryParamsMap[queryParamsMapKey] === '[]' ||
        queryParamsMap[queryParamsMapKey] === '{"from":null,"to":null}'
      ) {
        queryParamsMap[queryParamsMapKey] = null;
      }
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParamsMap,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  private initForm(): void {
    this.form = this.fb.group(
      this.config?.reduce(
        (prev, next) => ({
          ...prev,
          ...next.filterFormConfig,
        }),
        {},
      ),
    );
  }

  private anyObjectKeyHasValue(obj: any): boolean {
    return obj && Object.keys(obj).some((key) => (isArray(obj[key]) ? obj[key].length : !!obj[key] || obj[key] === 0)); // obj[key] === 0 for values with id: 0 from backend
  }

  private removeKeysFromSessionStorage(config: IFilterV2<any>[]): void {
    const queryParamsMap = new Map<string, string>();

    config.forEach((singleConfig) => {
      if (Array.isArray(singleConfig.sessionStorageKey)) {
        singleConfig.sessionStorageKey.forEach((key) => {
          queryParamsMap.set(key, null);
          return sessionStorage.removeItem(key);
        });
      } else {
        queryParamsMap.set(singleConfig.sessionStorageKey, null);
        sessionStorage.removeItem(singleConfig.sessionStorageKey);
      }
    });

    this.filtersService.queryParamsObject = Object.fromEntries(queryParamsMap);
    this.addToQueryParams(this.filtersService.queryParamsObject);
  }

  getForm(config: IFilterV2<any>): AbstractControl {
    return this.form.get(config.internalName);
  }

  showStories($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.asideService.openAside(this.allStoriesRef, { position: AsidePosition.RIGHT });
    this.cd.markForCheck();
  }

  hideDetailsPanel(): void {
    this.asideService.closeAside();
    this.cd.markForCheck();
  }

  private takeCareOfFiltersInQueryParams() {
    this.route.queryParamMap.pipe(take(1), takeUntil(this.destroyed$)).subscribe((params: ParamMap) => {
      params.keys.forEach((key: string) => {
        {
          sessionStorage.setItem(key, params.get(key));
        }
      });

      this.initFiltersFromSessionStorage();

      if (Object.entries(params?.['params']).length) {
        this.filtersService.queryParamsObject = params?.['params'];
        if (!this.filteringInProgress) {
          this.onFiltersChange();
        }
      }

      if (!params.keys?.length) {
        this.addToQueryParams(this.filtersService.queryParamsObject);
      }
    });

    let previousRoute = null;
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== previousRoute) {
          this.addToQueryParams(this.filtersService.queryParamsObject);
        }
        previousRoute = event.url;
      }
    });
  }
  updateFilterCounter(userFilters: any): number {
    return (this.filterCounter = Object.values(userFilters).filter(
      (value) =>
        value !== null &&
        value !== undefined &&
        (!Array.isArray(value) || value.length > 0) &&
        !(typeof value === 'string' && value.trim() === ''),
    ).length);
  }

  handleSearchSubmitted(value: string, filterConfig: IFilterV2<any>): void {
    this.form.get(filterConfig.internalName).setValue(value);
    this.setSearchTermValue(value);
    this.dropdownOpen = false;
    this.onPillsVisibleChange(this.dropdownOpen);
    this.performFiltering();
  }

  get visibleConfig(): IFilterV2<any>[] {
    return this.config?.filter((singleConfig) => !singleConfig.internalName.includes('SearchText')) || [];
  }

  get searchTextFilterConfig(): IFilterV2<any>[] {
    return this.config?.filter((singleConfig) => singleConfig.internalName.includes('SearchText')) || [];
  }

  onPillsVisibleChange(isVisible: boolean): void {
    this.dropdownOpen = isVisible;
  }

  cleanEmptyCollections(userFilters): any {
    for (const key in userFilters) {
      if (Array.isArray(userFilters[key]) && !userFilters[key].length) {
        userFilters[key] = null;
      }
    }
    return userFilters;
  }

  getSearchTermValue(): any {
    return this.searchTerm;
  }

  setSearchTermValue(value: string): any {
    this.searchTerm = value;
  }

  @HostListener('window:scroll', [])
  updateBlurState(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (this.dropdownOpen) {
      this.isScrolled = scrollPosition > 80;
    } else {
      this.isScrolled = false;
    }
  }
}
