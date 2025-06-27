import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
  imports: [CommonModule, FormsModule],
})
export class TextareaModule {}
