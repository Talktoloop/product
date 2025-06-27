import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpandMoreIconModule } from '@app/shared/icons/expand-more-icon/expand-more-icon.module';
import { SubnavigationBarComponent } from './subnavigation-bar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SubnavigationBarComponent],
  imports: [CommonModule, RouterModule, ExpandMoreIconModule, TranslateModule],
  exports: [SubnavigationBarComponent],
})
export class SubnavigationBarModule {}
