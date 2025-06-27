import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MagicLinkRoutingModule } from './magic-link-routing.module';
import { MagicLinkComponent } from './magic-link.component';

@NgModule({
  declarations: [MagicLinkComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [MagicLinkComponent, MagicLinkRoutingModule],
})
export class MagicLinkModule {}
