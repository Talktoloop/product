import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';

@Component({
  selector: 'app-create-new-organization-page',
  templateUrl: './create-new-organization-page.component.html',
  styleUrls: ['./create-new-organization-page.component.scss'],
})
export class CreateNewOrganizationPageComponent {
  organizationName: string;
  edit: boolean;

  constructor(private router: Router) {
    this.organizationName = this.router.getCurrentNavigation()?.extras?.state?.organizationName;
    this.edit = this.router.getCurrentNavigation()?.extras?.state?.edit;
  }

  onBack() {
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER_ORGANIZATION}`], { state: { edit: this.edit } });
  }

  onOrganizationAdded(event) {
    this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.REGISTER_ORGANIZATION}`], {
      state: { addedOrganization: event, edit: this.edit },
    });
  }
}
