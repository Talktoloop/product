import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CyDirective } from './cy.directive';

@NgModule({
  declarations: [CyDirective],
  exports: [CyDirective],
  imports: [CommonModule],
})
export class CyModule {}
