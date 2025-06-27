import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [TooltipDirective, TooltipComponent],
  imports: [],
  exports: [TooltipDirective, TooltipComponent],
})
export class TooltipDirectiveModule {}
