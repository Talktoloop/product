import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoIconModule } from '@shared/icons/info-icon/info-icon.module';
import { InfoLinkComponent } from './info-link.component';

@NgModule({
  declarations: [InfoLinkComponent],
  imports: [CommonModule, InfoIconModule],
  exports: [InfoLinkComponent],
})
export class InfoLinkModule {}
