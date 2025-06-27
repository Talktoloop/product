import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { CheckboxWrapperModule } from '@app/shared/components/checkbox-wrapper/checkbox-wrapper.module';
import { CheckboxModule } from '@app/shared/components/checkbox/checkbox.module';
import { InputModule } from '@app/shared/components/input/input.module';
import { ModalV2Module } from '@app/shared/components/modal-v2/modal-v2.module';
import { SearchIconModule } from '@app/shared/icons/search-icon/search-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { AssignModeratorFormComponent } from './assign-moderator-form/assign-moderator-form.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AssignModeratorFormComponent],
  imports: [
    CommonModule,
    ModalV2Module,
    CheckboxModule,
    ButtonModule,
    CheckboxWrapperModule,
    MatTableModule,
    TranslateModule,
    SearchIconModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule,
    ToastrModule
  ],
})
export class AssignModeratorModalModule {}
