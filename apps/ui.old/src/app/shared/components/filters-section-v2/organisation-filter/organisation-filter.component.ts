import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ControlValueAccessorBase } from '@shared/utils/control-value-accessor-base';
import { AutocompleteOption } from '../../autocomplete/autocomplete-option.model';

@Component({
  selector: 'loop-organisation-filter',
  templateUrl: './organisation-filter.component.html',
  styleUrls: ['./organisation-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationFilterComponent extends ControlValueAccessorBase<string> implements OnInit {
  @Input() title: string;
  @Input() selectedOrganizations: IBaseEntityN[] = [];
  @Output() organisationsDataChange = new EventEmitter<any[]>();
  @Output() dropdownClose = new EventEmitter<void>();
  searchOrganisation = new FormControl();


  constructor(
    protected ngControl: NgControl,
    private translateService: TranslateService,
    private cd: ChangeDetectorRef,
    protected injector: Injector,
    private metadataService: MetaDataService,
  ) {
    super(ngControl, injector);
  }
  query: string;
  matchingOrganizations: IBaseEntityN[];
  perfectMatch: boolean;
  organizations: IBaseEntityN[] = [];
  lastOption: AutocompleteOption;
  LoopIcon = LoopIcon;
  selectedOrganization: any;



  private allOrganizations: IBaseEntityN[] = [];

  private readonly requestDebounceTime = 200;
  ngOnInit(): void {
    const initialData = this.control?.value || [];
    this.selectedOrganizations = this.allOrganizations.filter((org) => initialData.includes(org.id));
    this.getOrganisations();
    this.searchOrganisation.valueChanges.pipe(debounceTime(this.requestDebounceTime)).subscribe((query) => {
      this.handleQueryChange(query);
    });
    this.matchingOrganizations = this.allOrganizations;
  }

  private getOrganisations(): void {
    this.metadataService.organisations$.pipe(takeUntil(this.destroyed$)).subscribe((organizations) => {
      organizations = organizations.map((organization) => {
        return {
          ...organization,
          name: !!organization.acronym ? `${organization.name} • ${organization.acronym}` : organization.name,
          storiesCount: organization.storiesCount || 0,
        };
      });

      this.allOrganizations = organizations;
      this.organizations = organizations;
      this.filterSelectedOrganizations();
      this.matchingOrganizations = this.organizations;
    });
  }

  getPlaceholder(): string {
    return this.translateService.instant('filtersV2.organisation.placeholder');
  }

  handleQueryChange(query: string): void {
    this.query = query;

    this.matchingOrganizations =
      !query || !query.length
        ? this.allOrganizations
        : this.allOrganizations.filter((organization) => organization.name?.toLowerCase().includes(query?.toLowerCase()));

    this.perfectMatch = !!this.matchingOrganizations?.find((organization) => organization.name?.toLowerCase() === query?.toLowerCase());

    if (!query?.length) {
      this.control?.setValue(null, { emitEvent: false });
    }
    this.cd.markForCheck();
  }

  handleSelectedOrganizationChange(id: string): void {
    this.setControlValue(id ? id : null);
    this.cd.detectChanges();
  }

  private setControlValue(value: string): void {
    this.control.patchValue(value);
    this.control.markAsTouched();
  }

  writeValue(obj: string): void {
    super.writeValue(obj);
    this.cd.detectChanges();
  }

  private filterSelectedOrganizations(): void {
    if (this.control.value?.length > 0) {
      this.selectedOrganizations = this.allOrganizations.filter(({ id: id1 }) => this.control.value.includes(id1));
    }
  }

  handleMultiSelect(selectedIds: string[]): void {
    this.selectedOrganizations = this.allOrganizations.filter((org) => selectedIds.includes(org.id));
    this.control.setValue(this.selectedOrganizations.map((org) => org.id), { emitEvent: false });
    this.cd.detectChanges();
  }

  toggleOrganizationSelection(organization: IBaseEntityN): void {
    if (this.isOrganizationSelected(organization)) {
      this.selectedOrganizations = this.selectedOrganizations.filter((org) => org.id !== organization.id);
    } else {
      this.selectedOrganizations.push(organization);
    }
    this.control.setValue(this.selectedOrganizations.map((org) => org.id), { emitEvent: false });
    this.cd.detectChanges();
  }

  isOrganizationSelected(organization: IBaseEntityN): boolean {
    return this.selectedOrganizations.some((org) => org.id === organization.id);
  }

  onClearClicked(): void {
    this.control.setValue('');
  }

  trackByFn(index: number, item: IBaseEntityN): string {
    return item.id; // or any unique identifier
  }

  currentFiltersCount(): number {
    return this.selectedOrganizations.length;
  }

  submitForm(): void {
    this.checkOrganization();
  }

  onFilterChange(): void {
    this.checkOrganization();
    this.cd.detectChanges();
  }

  checkOrganization(): void {
    const organisationIds = this.selectedOrganizations.map((org) => org.id);
    if (!organisationIds.length) {
      this.organisationsDataChange.emit();
    } else {
      this.organisationsDataChange.emit(organisationIds);
    }
    this.dropdownClose.emit();
  }
}
