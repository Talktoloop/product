import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddIconModule } from '../../icons/add-icon/add-icon.module';
import { NewLineIconModule } from '../../icons/new-line-icon/new-line-icon.module';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';
import { OrganisationComponent } from './organisation.component';

@NgModule({
  declarations: [OrganisationComponent],
  imports: [
    CommonModule,
    AutocompleteModule,
    NewLineIconModule,
    AddIconModule,
    FormsModule,
    TranslateModule,
    CyModule,
    LoopDesignSystemModule,
    SharedModule,
  ],
  exports: [OrganisationComponent],
})
export class OrganisationModule {}
