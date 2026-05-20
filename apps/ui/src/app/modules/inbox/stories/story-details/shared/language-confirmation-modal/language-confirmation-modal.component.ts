import { Component, Inject, Output, Input } from '@angular/core';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-language-confirmation-modal',
  templateUrl: './language-confirmation-modal.component.html',
  styleUrls: ['./language-confirmation-modal.component.scss']
})
export class LanguageConfirmationModalComponent extends ModalBase {
  @Input() language: string = '';
  @Output() confirm = new Subject<string>();

  constructor(
    @Inject('close$') close$: Subject<any>
  ) {
    super(close$);
  }

  confirmLanguage(): void {
    this.confirm.next(this.language);
    this.onModalClose();
  }

  onCancel(): void {
    this.onModalClose();
  }
}