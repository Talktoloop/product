import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipDirectiveModule } from '../../../directives/tooltip/tooltip.directive.module';
import { TextBoxesComponent } from './text-boxes.component';

@NgModule({
  declarations: [TextBoxesComponent],
  imports: [CommonModule, TranslateModule, TooltipDirectiveModule],
  exports: [TextBoxesComponent],
})
export class TextBoxesModule {}
