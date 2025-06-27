import { Component, Input } from '@angular/core';
import { ICaseManagerNoteViewModel } from '@core/services/api/model/story.model';

@Component({
  selector: 'app-case-manager-note',
  templateUrl: './case-manager-note.component.html',
  styleUrls: ['./case-manager-note.component.scss'],
})
export class CaseManagerNoteComponent {
  DATE_FORMAT = 'dd/MM/yy h:mm a';
  @Input() note: ICaseManagerNoteViewModel;
}
