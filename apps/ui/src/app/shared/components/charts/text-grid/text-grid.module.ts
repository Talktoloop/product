import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TextGridComponent } from './text-grid.component';

@NgModule({
  declarations: [TextGridComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TextGridComponent],
})
export class TextGridModule {}
