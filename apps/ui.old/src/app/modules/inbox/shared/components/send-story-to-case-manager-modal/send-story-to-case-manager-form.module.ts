import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { ModalV2Module } from '@app/shared/components/modal-v2/modal-v2.module';
import { NewStoryRadioModule } from '@app/shared/components/new-story-radio/new-story-radio.module';
import { RadioModule } from '@app/shared/components/radio/radio.module';
import { TextareaV2Module } from '@app/shared/components/textarea-v2/textarea-v2.module';
import { TranslateModule } from '@ngx-translate/core';
import { SendToCaseManagerFormComponent } from './send-story-to-case-manager-form/send-story-to-case-manager-form.component';

@NgModule({
  declarations: [SendToCaseManagerFormComponent],
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    ModalV2Module,
    NewStoryRadioModule,
    RadioModule,
    ReactiveFormsModule,
    TextareaV2Module,
    TranslateModule,
  ],
})
export class SendStoryToCaseManagerFormModule {}
