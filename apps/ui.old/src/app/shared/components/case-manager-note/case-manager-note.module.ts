import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaseManagerNoteComponent } from '@shared/components/case-manager-note/case-manager-note.component';

@NgModule({
  declarations: [CaseManagerNoteComponent],
  imports: [CommonModule],
  exports: [CaseManagerNoteComponent],
})
export class CaseManagerNoteModule {}
