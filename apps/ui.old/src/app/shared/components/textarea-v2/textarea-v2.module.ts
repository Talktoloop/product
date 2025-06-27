import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TooltipDirectiveModule } from '@app/shared/directives/tooltip/tooltip.directive.module';
import { AutosizeModule } from 'ngx-autosize';
import { InfoIconModule } from '../../icons/info-icon/info-icon.module';
import { SharedModule } from '../../shared.module';
import { TextareaV2Component } from './textarea-v2.component';

@NgModule({
  declarations: [TextareaV2Component],
  imports: [CommonModule, FormsModule, SharedModule, TooltipDirectiveModule, InfoIconModule, CyModule, AutosizeModule],
  exports: [TextareaV2Component],
})
export class TextareaV2Module {}
