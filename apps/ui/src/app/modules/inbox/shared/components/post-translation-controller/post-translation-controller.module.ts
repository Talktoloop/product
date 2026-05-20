import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { InputModule } from '@app/shared/components/input/input.module';
import { TextareaV2Module } from '@app/shared/components/textarea-v2/textarea-v2.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { InfoIconModule } from '@app/shared/icons/info-icon/info-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { EditPencilIconModule } from '@shared/icons/edit-pencil-icon/edit-pencil-icon.module';
import { LoopDesignSystemModule } from '@shared/loop-design-system/loop-design-system.module';
import { PostTranslationControllerComponent } from './post-translation-controller.component';

@NgModule({
  declarations: [PostTranslationControllerComponent],
  imports: [
    ButtonModule,
    CommonModule,
    CyModule,
    FormsModule,
    InfoIconModule,
    InputModule,
    TextareaV2Module,
    TranslateModule,
    MatExpansionModule,
    EditPencilIconModule,
    LoopDesignSystemModule,
  ],
  exports: [PostTranslationControllerComponent],
})
export class PostTranslationControllerModule {}
