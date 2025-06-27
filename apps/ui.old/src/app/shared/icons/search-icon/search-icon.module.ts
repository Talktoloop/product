import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchIconComponent } from './search-icon.component';

@NgModule({
  declarations: [SearchIconComponent],
  exports: [SearchIconComponent],
  imports: [CommonModule],
})
export class SearchIconModule {}
