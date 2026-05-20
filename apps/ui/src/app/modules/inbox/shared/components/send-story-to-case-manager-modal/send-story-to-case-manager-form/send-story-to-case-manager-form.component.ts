import { Component, Inject, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ISendStoryToCaseManager } from '@app/core/services/api/model/request/send-story-to-case-manager.model';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-send-story-to-case-manager-form',
  templateUrl: './send-story-to-case-manager-form.component.html',
  styleUrls: ['./send-story-to-case-manager-form.component.scss'],
})
export class SendToCaseManagerFormComponent extends ModalBase {
  sendToCaseManagerForm: UntypedFormGroup;
  @Output() confirm = new Subject<ISendStoryToCaseManager>();

  constructor(@Inject('close$') close$: Subject<any>, @Inject('type') public type) {
    super(close$);

    this.sendToCaseManagerForm = new UntypedFormGroup({
      immediateAssistance: new UntypedFormControl(false, [Validators.required]),
      note: new UntypedFormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(65535)]),
    });
  }

  sendStoryToCaseManager(): void {
    if (this.sendToCaseManagerForm.invalid) {
      this.sendToCaseManagerForm.markAllAsTouched();
      return;
    }
    const formValues = this.sendToCaseManagerForm.value;

    const payload: ISendStoryToCaseManager = {
      immediateAssistance: formValues.immediateAssistance,
      note: formValues.note,
    };

    this.confirm.next(payload);
    this.onModalClose();
  }
}
