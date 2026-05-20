import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SubpageFooterComponent } from './subpage-footer.component';

@NgModule({
  declarations: [SubpageFooterComponent],
  imports: [CommonModule, TranslateModule],
  exports: [SubpageFooterComponent],
})
export class SubpageFooterModule {}
