import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { PillsModule } from '@shared/components/pills/pills.module';
import { StoryOrganisationsComponent } from './story-organisations.component';

@NgModule({
  declarations: [StoryOrganisationsComponent],
  exports: [StoryOrganisationsComponent],
  imports: [CommonModule, TranslateModule, PillsModule, ButtonModule],
})
export class StoryOrganisationsModule {}
