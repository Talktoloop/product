import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { OrganisationsModalComponent } from '@app/modules/new-story-v2/modals/organisations-modal/organisations-modal.component';
import { BaseComponent } from '@app/shared/components/base.component';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loop-organizations-section',
  templateUrl: './organizations-section.component.html',
  styleUrls: ['./organizations-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationsSectionComponent extends BaseComponent implements OnInit {
  @Input() form: UntypedFormGroup;
  @Input() isSensitive: boolean;

  temporaryForm: UntypedFormGroup;
  organizations: IBaseEntityN[] = [];

  constructor(private metadataService: MetaDataService, private modalService: ModalServiceV2, private fb: UntypedFormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.getOrganisations();
    this.initForm();
  }

  onModalOpen(): void {
    this.modalService.open(OrganisationsModalComponent, {
      isSensitive: this.isSensitive,
    });
  }

  addOrganisation(): void {
    const currentOrganisation = this.temporaryForm.get('currentOrganisation').value || [];
    const acceptedOrganisations: string[] = this.temporaryForm.get('acceptedOrganisations').value || [];

    this.temporaryForm.get('acceptedOrganisations').setValue(acceptedOrganisations.concat(currentOrganisation));
    this.temporaryForm.get('currentOrganisation').reset();
  }

  removeOrganisation(id: string): void {
    const acceptedOrganisations: string[] = this.temporaryForm.get('acceptedOrganisations').value || [];
    const organisationIndex = acceptedOrganisations.findIndex((organisation) => id === organisation);

    if (organisationIndex !== -1) {
      acceptedOrganisations.splice(organisationIndex, 1);
    }
    this.temporaryForm.get('acceptedOrganisations').setValue(acceptedOrganisations);
  }

  getSelectedOrganisations(): any[] {
    const organisation = this.form.get('organisations').value || [];
    const convertedOrganisation = [];

    if (organisation.length) {
      organisation.forEach((org) => {
        convertedOrganisation.push({ id: org });
      });
    }

    return convertedOrganisation;
  }

  getOrganisation(id: string): string {
    return this.organizations.find((org) => org.id === id)?.name || id;
  }

  addMoreOrganisationsEnable(): boolean {
    return this.form.get('organisations')?.value?.length;
  }

  private initForm(): void {
    this.temporaryForm = this.fb.group({
      acceptedOrganisations: [[]],
      currentOrganisation: [null],
    });

    this.watchFormChanges();
  }

  private watchFormChanges(): void {
    this.temporaryForm.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      const currentOrganisation: string = this.temporaryForm.get('currentOrganisation').value || [];
      const acceptedOrganisations: string[] = this.temporaryForm.get('acceptedOrganisations').value || [];
      const allOrganisations = acceptedOrganisations.concat(currentOrganisation);

      this.form.get('organisations').setValue(allOrganisations);
    });
  }

  private getOrganisations(): void {
    this.metadataService.organisations$.pipe(take(1), takeUntil(this.destroyed$)).subscribe((organizations) => {
      this.organizations = organizations;
    });
  }
}
