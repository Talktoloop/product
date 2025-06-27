import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateNewOrganizationModule } from '../create-new-organization/create-new-organization.module';
import { ModalV2Module } from '../modal-v2/modal-v2.module';
import { CreateNewOrganizationModalComponent } from './create-new-organization-modal.component';

@NgModule({
  declarations: [CreateNewOrganizationModalComponent],
  imports: [CommonModule, ModalV2Module, CreateNewOrganizationModule],
  exports: [CreateNewOrganizationModalComponent],
})
export class CreateNewOrganizationModalModule {}
