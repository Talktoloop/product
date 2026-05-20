import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsideComponent } from './aside.component';

@NgModule({
  declarations: [AsideComponent],
  exports: [AsideComponent],
  imports: [CommonModule],
})
export class AsideModule {}
