import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SkeletonTextModule } from '@app/shared/components/skeleton-text/skeleton-text.module';
import { TranslateModule } from '@ngx-translate/core';
import { InputModule } from '@shared/components/input/input.module';
import { ArrowNextIconModule } from '../../../../icons/arrow-next-icon/arrow-next-icon.module';
import { ChatReplyIconModule } from '../../../../icons/chat-reply-icon/chat-reply-icon.module';
import { CheckmarkRoundIconModule } from '../../../../icons/checkmark-round-icon/checkmark-round-icon.module';
import { ButtonModule } from '../../../button/button.module';
import { CheckboxV2Module } from '../../../checkbox-v2/checkbox-v2.module';
import { CheckboxModule } from '../../../checkbox/checkbox.module';
import { TextareaV2Module } from '../../../textarea-v2/textarea-v2.module';
import { TextareaModule } from '../../../textarea/textarea.module';
import { ReplyFormComponent } from './reply-form.component';

@NgModule({
  declarations: [ReplyFormComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    TranslateModule,
    ReactiveFormsModule,
    SkeletonTextModule,
    TextareaModule,
    InputModule,
    TextareaV2Module,
    ChatReplyIconModule,
    ButtonModule,
    ArrowNextIconModule,
    CheckboxV2Module,
    CheckmarkRoundIconModule,
  ],
  exports: [ReplyFormComponent],
})
export class ReplyFormModule {}
