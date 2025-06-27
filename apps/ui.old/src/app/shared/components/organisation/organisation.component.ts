import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { IBaseEntityN } from '@core/services/api/model/response/base-entity.model';
import { take, takeUntil } from 'rxjs/operators';
import { ControlValueAccessorBase } from '../../utils/control-value-accessor-base';
import { AutocompleteOption } from '../autocomplete/autocomplete-option.model';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { CreateNewOrganizationModalComponent } from '../create-new-organization-modal/create-new-organization-modal.component';

@Component({
  selector: 'loop-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationComponent extends ControlValueAccessorBase<string> implements OnInit {
  @ViewChild(AutocompleteComponent) autocomplete: AutocompleteComponent;
  @Input() showAddOption: boolean;
  @Input() mobileTitle: string;
  @Input() placeholder: string;
  @Input() showAllWhenEmpty: boolean;
  @Input() openDropDownOnSuffixClick: boolean;
  @Input() runRequestOnAdd: boolean;
  @Input() selectedOrganizations: IBaseEntityN[] = [];
  @Input() customAddOrganizationHandler: boolean;
  @Input() shouldRouteForMobile = true;
  @Input() prefix = true;
  @Output() organizationAddClicked = new EventEmitter<string>();

  query: string;
  matchingOrganizations: IBaseEntityN[];
  perfectMatch: boolean;
  organizations: IBaseEntityN[] = [];
  lastOption: AutocompleteOption;
  LoopIcon = LoopIcon;
  private allOrganizations: IBaseEntityN[] = [];

  constructor(
    protected ngControl: NgControl,
    private metadataService: MetaDataService,
    private cd: ChangeDetectorRef,
    private modalService: ModalServiceV2,
    protected injector: Injector,
  ) {
    super(ngControl, injector);
  }

  ngOnInit(): void {
    this.getOrganisations();
  }

  private getOrganisations(): void {
    this.metadataService.organisations$.pipe(takeUntil(this.destroyed$)).subscribe((organizations) => {
      organizations = organizations.map((organization) => {
        return {
          ...organization,
          name: !!organization.acronym ? `${organization.name} • ${organization.acronym}` : organization.name,
        };
      });
      this.allOrganizations = organizations;
      this.organizations = organizations;
      this.filterSelectedOrganizations();
      this.matchingOrganizations = this.organizations;
    });
  }

  handleQueryChange(query: string): void {
    this.filterSelectedOrganizations();
    this.query = query;

    this.matchingOrganizations =
      !query || !query.length
        ? this.organizations
        : this.organizations.filter((organization) => organization.name?.toLowerCase().includes(query?.toLowerCase()));

    this.perfectMatch = !!this.matchingOrganizations?.find((organization) => organization.name?.toLowerCase() === query?.toLowerCase());

    !query?.length && this.control?.setValue(null, { emitEvent: false });
    this.cd.markForCheck();
  }

  handleOrganisationAdd(organizationName: string): void {
    if (this.customAddOrganizationHandler) {
      this.organizationAddClicked.emit(organizationName);
      return;
    }

    if (this.runRequestOnAdd) {
      this.modalService.open(CreateNewOrganizationModalComponent, { organizationName }).close$.subscribe((event: any) => {
        const { id, name } = event;
        this.setNewOrganisationData(name, id);
      });
    } else {
      this.setNewOrganisationData(organizationName);
    }
  }

  setNewOrganisationData(value: string, id?: string): void {
    this.metadataService
      .getOrganisations()
      .pipe(take(1))
      .subscribe((organizations) => {
        this.metadataService.organisations$.next(organizations);
        this.lastOption = { id: id || value, name: value };
        this.setControlValue(id ?? value);
        this.cd.detectChanges();
      });
  }

  handleSelectedOrganizationChange(id: string): void {
    this.lastOption = !!id ? this.autocomplete.lastOption : null;
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
    if (this.selectedOrganizations?.length) {
      this.organizations = this.allOrganizations.filter(({ id: id1 }) => !this.selectedOrganizations.some(({ id: id2 }) => id2 === id1));
    }
  }
}
