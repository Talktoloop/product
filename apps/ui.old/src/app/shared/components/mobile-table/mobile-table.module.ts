import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { MobileCellDirective } from './mobile-cell.directive';
import { MobileTableComponent } from './mobile-table.component';

@NgModule({
  declarations: [MobileTableComponent, MobileCellDirective],
  exports: [MobileTableComponent, MobileCellDirective],
  imports: [CommonModule, TranslateModule, ButtonModule],
})
export class MobileTableModule {}
