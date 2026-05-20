import { ChangeDetectorRef, Component, EventEmitter, Injector, Input, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { FormControl, NgControl, UntypedFormGroup } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityDN, IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { ControlValueAccessorBase } from '@app/shared/utils/control-value-accessor-base';
import { BehaviorSubject, debounceTime, Subject, takeUntil } from 'rxjs';
import { CheckboxEvent } from '../../checkbox/checkbox.component';
import { IFilterV2 } from '../filter.model';

@Component({
  selector: 'loop-replied-to-filter',
  templateUrl: './replied-to-filter.component.html',
  styleUrls: ['./replied-to-filter.component.scss'],
})
export class RepliedToFilterComponent extends ControlValueAccessorBase<string> implements OnInit, OnDestroy {
  @Input() config: IFilterV2<any>;
  @Input() title: string;
  @Input() form: UntypedFormGroup;
  @Input() repliedToData: IBaseEntityDN[] = [];
  @Input() flat = false;
  @Input() noTranslation = false;
  @Input() nestedModalMode: boolean;
  @Input() isModal: boolean;
  @Input() isAllFiltersModal: boolean;

  @Output() modalFilterDataChange = new EventEmitter<string[]>();
  @Output() totalSelectedChange = new EventEmitter<number>();
  @Output() filterDataChange = new EventEmitter<string[]>();
  @Output() seeAllClicked = new EventEmitter<void>();
  @Output() closeDropdown = new EventEmitter<void>();

  searchOrganisation = new FormControl('');
  matchingOrganizations: IBaseEntityN[] = [];
  allOrganizations: IBaseEntityN[] = [];
  selectedOrganizations: IBaseEntityN[] = [];

  toggleOrganisation = new BehaviorSubject<boolean>(false);
  protected destroyed$ = new Subject<void>();
  private readonly ORGANISATION_OPTION_ID = '1';
  private _options: IBaseEntityDN[] = [];

  constructor(
    @Self() @Optional() protected ngControl: NgControl,
    private cd: ChangeDetectorRef,
    protected injector: Injector,
    private metadataService: MetaDataService,
    public ui: UIService,
  ) {
    super(ngControl, injector);
  }

  get options(): IBaseEntityDN[] {
    return this._options;
  }

  ngOnInit(): void {
    this.initializeOptions();
    this.setupSearchListener();
    this.loadOrganizations();

    this.form.get('region')?.valueChanges
      .pipe(debounceTime(200), takeUntil(this.destroyed$))
      .subscribe(() => this.loadOrganizations());
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onSeeAllClicked(event: Event): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.seeAllClicked.emit();
  }

  onCheckboxChanged(event: CheckboxEvent): void {
    const foundItem = this.options.find((option) => String(option.id) === String(event.value));
    if (!foundItem) return;

    foundItem.checked = !foundItem.checked;

    if (event.value === this.ORGANISATION_OPTION_ID) {
      this.toggleOrganisation.next(foundItem.checked);
      if (!foundItem.checked) {
        this.selectedOrganizations = [];
      }
    }

    this.syncFilterState();
    this.emitChanges();
  }

  handleQueryChange(query: string): void {
    this.matchingOrganizations = query
      ? this.allOrganizations.filter((org) => org.name.toLowerCase().includes(query.toLowerCase()))
      : [...this.allOrganizations];
    this.cd.markForCheck();
  }

  toggleOrganizationSelection(organization: IBaseEntityN): void {
    const exists = this.isOrganizationSelected(organization);
    this.selectedOrganizations = exists
      ? this.selectedOrganizations.filter((org) => org.id !== organization.id)
      : [...this.selectedOrganizations, organization];

    this.syncFilterState();
    this.emitChanges();
    this.cd.detectChanges();
  }

  toggleSelectAll(): void {
    this.selectedOrganizations = this.selectedOrganizations.length
      ? []
      : [...this.matchingOrganizations];

    this.options.forEach(opt => (opt.checked = false));
    this.syncFilterState();
    this.emitChanges();
    this.cd.detectChanges();
  }

  submitForm(): void {
    this.filterDataChange.emit(this.getSelectedIds());
  }

  isOrganizationSelected(organization: IBaseEntityN): boolean {
    return this.selectedOrganizations.some((org) => org.id === organization.id);
  }

  trackByFn(_: number, item: IBaseEntityN): string {
    return item.id;
  }

  private initializeOptions(): void {
    this._options = [...(this.repliedToData || [])];
    const repliedToValues = this.form.get('organisationResponsiveness')?.getRawValue() || [];
    this.options.forEach(opt => {
      opt.checked = repliedToValues.includes(opt.id);
    });

    const orgChecked = this.options.some(opt => opt.id === this.ORGANISATION_OPTION_ID && opt.checked);
    this.toggleOrganisation.next(orgChecked);
  }

  private setupSearchListener(): void {
    this.searchOrganisation.valueChanges
      .pipe(debounceTime(200), takeUntil(this.destroyed$))
      .subscribe((query) => this.handleQueryChange(query));
  }

  private loadOrganizations(): void {
    this.metadataService.organisations$.pipe(takeUntil(this.destroyed$)).subscribe((organizations) => {
      this.allOrganizations = organizations.map(org => ({
        ...org,
        name: org.acronym ? `${org.name} • ${org.acronym}` : org.name,
        storiesCount: org.storiesCount || 0,
      }));

      const selectedLocations = this.form.get('region')?.value?.selectedRegionsOrCountries || [];
      const selectedLocationIds = new Set(selectedLocations.map(loc => String(loc.id)));

      this.matchingOrganizations = selectedLocationIds.size
        ? this.allOrganizations.filter(org => selectedLocationIds.has(String(org.countryId)))
        : [...this.allOrganizations];

      const repliedToValues = this.form.get('organisationResponsiveness')?.getRawValue() || [];
      this.selectedOrganizations = this.allOrganizations.filter(org => repliedToValues.includes(org.id));

      this.emitChanges();
      this.cd.markForCheck();
    });
  }

  private getSelectedIds(): string[] {
    const checkboxIds = this.options.filter(option => option.checked).map(option => option.id);
    const organizationIds = this.selectedOrganizations.map(org => org.id);
    return [...checkboxIds, ...organizationIds];
  }

  private emitChanges(): void {
    const selectedIds = this.getSelectedIds();
    this.modalFilterDataChange.emit(selectedIds);
    this.totalSelectedChange.emit(selectedIds.length);
  }

  private syncFilterState(): void {
    const checkedCheckboxIds = this.options.filter(o => o.checked).map(o => o.id);
    const selectedOrgIds = this.selectedOrganizations.map(org => org.id);
    const allSelectedIds = [...checkedCheckboxIds, ...selectedOrgIds];

    if (allSelectedIds.length === 0) {
      this.form.get('organisationResponsiveness').setValue([]);
    } else {
      this.form.get('organisationResponsiveness').setValue(allSelectedIds);
    }
  }
}
