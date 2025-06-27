import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { CreateNewOrganizationModalComponent } from '@app/shared/components/create-new-organization-modal/create-new-organization-modal.component';
import { CreateOrganizationEvent } from '@app/shared/components/create-new-organization/create-new-organization.component';
import { OrganisationComponent } from '@app/shared/components/organisation/organisation.component';
import { FullNameFormComponent } from '../components/full-name-form/full-name-form.component';
@Component({
  selector: 'app-register-organization',
  templateUrl: './register-organization.component.html',
  styleUrls: ['./register-organization.component.scss'],
})
export class RegisterOrganizationComponent implements OnInit, AfterViewInit {
  @ViewChild(OrganisationComponent) organisationComponent: OrganisationComponent;
  @ViewChild(FullNameFormComponent) fullNameFormComponent: FullNameFormComponent;
  control: FormControl;
  hideLastName: boolean;
  firstName: string;
  lastName: string;
  private isMobile: boolean;
  private addedOrganization: CreateOrganizationEvent;
  private edit: boolean;
  private optin_marketing: boolean;
  private email: string;

  constructor(
    private router: Router,
    private modalService: ModalServiceV2,
    private uiService: UIService,
    private profileService: ProfileService,
  ) {
    this.edit = this.router.getCurrentNavigation()?.extras?.state?.edit;
    this.addedOrganization = this.router.getCurrentNavigation().extras?.state?.addedOrganization;
    this.firstName = this.router.getCurrentNavigation().extras?.state?.firstName;
    this.lastName = this.router.getCurrentNavigation().extras?.state?.lastName;
    this.hideLastName = this.router.getCurrentNavigation().extras?.state?.hideLastName;
    this.optin_marketing = this.router.getCurrentNavigation().extras?.state?.optin_marketing
    this.email = this.router.getCurrentNavigation().extras?.state?.email
    this.control = new FormControl(this.profileService.userProfile?.organisation?.id ?? null, Validators.required);
  }

  ngOnInit() {
    this.uiService.mobileView$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  ngAfterViewInit(): void {
    if (this.addedOrganization) {
      setTimeout(() => this.setNewOrganizationData(this.addedOrganization));
    }
  }

  onBack() {
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER}`], { state: { edit: this.edit, hideLastName: this.fullNameFormComponent?.hideLastName ?? this.hideLastName } });
  }

  continue() {
    if (this.control.value) {
      this.fullNameFormComponent?.checkAndMarkValidationErrors();
    }

    if (this.control.value && this.fullNameFormComponent?.form?.invalid) {
      return;
    }

    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.ACCEPT_TERMS}`], {
      state: {
        organizationId: this.control.value,
        firstName: this.firstName,
        lastName: this.lastName,
        hideLastName: this.fullNameFormComponent?.hideLastName ?? this.hideLastName,
        edit: this.edit,
        optin_marketing: this.optin_marketing,
        email: this.email
      },
    });
  }

  onSkip() {
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.ACCEPT_TERMS}`], {
      state: {
        organizationId: null,
        firstName: this.firstName,
        lastName: this.lastName,
        hideLastName: this.fullNameFormComponent?.hideLastName ?? this.hideLastName,
        edit: this.edit,
        optin_marketing: this.optin_marketing,
        email: this.email
      },
    });
  }

  onAddOrganization(organizationName: string) {
    if (this.isMobile) {
      this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.CREATE_ORGANIZATION}`], { state: { organizationName, edit: this.edit } });
      return;
    }

    this.modalService.open(CreateNewOrganizationModalComponent, { organizationName }).close$.subscribe((event) => {
      this.setNewOrganizationData(event as any);
    });
  }

  private setNewOrganizationData(addedOrganization: CreateOrganizationEvent) {
    const name = addedOrganization?.name;
    const id = addedOrganization?.id;

    if (!name || !id) {
      return;
    }

    this.organisationComponent.setNewOrganisationData(name, id);
  }
}
