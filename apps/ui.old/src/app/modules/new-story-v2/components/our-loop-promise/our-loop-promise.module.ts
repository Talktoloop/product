import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InfoLinkModule } from '../../../../shared/components/info-link/info-link.module';
import { OurLoopPromiseComponent } from './our-loop-promise.component';

@NgModule({
  declarations: [OurLoopPromiseComponent],
  imports: [CommonModule, TranslateModule, InfoLinkModule],
  exports: [OurLoopPromiseComponent],
})
export class OurLoopPromiseModule {}
