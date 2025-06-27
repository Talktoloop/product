import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RedErrorIconModule } from '../../icons/red-error-icon/red-error-icon.module';
import { SharedModule } from '../../shared.module';
import { CheckboxV2Component } from './checkbox-v2.component';

@NgModule({
  declarations: [CheckboxV2Component],
  exports: [CheckboxV2Component],
  imports: [CommonModule, SharedModule, RedErrorIconModule],
})
export class CheckboxV2Module {}
