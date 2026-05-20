import { Component, Inject, Output } from '@angular/core';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { Subject } from 'rxjs';
import { Option } from '../language-picker.component';

@Component({
  selector: 'app-language-picker-modal',
  templateUrl: './language-picker-modal.component.html',
  styleUrls: ['./language-picker-modal.component.scss'],
})
export class LanguagePickerModalComponent extends ModalBase {
  @Output() select$ = new Subject<string>();

  constructor(@Inject('close$') close$: Subject<void>, @Inject('languages') public languages: Option[]) {
    super(close$);
  }

  selectLanguage(optionValue: string): void {
    this.select$.next(optionValue);
  }
}
