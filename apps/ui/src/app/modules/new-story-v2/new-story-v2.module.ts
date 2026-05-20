import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareYourExperienceWrapperComponent } from '@app/modules/new-story-v2/components/share-your-experience-wrapper/share-your-experience-wrapper.component';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { SubpageFooterModule } from '@shared/components/subpage-footer/subpage-footer.module';
import { SubpageHeaderModule } from '@shared/components/subpage-header/subpage-header.module';
import { SharedModule } from '@shared/shared.module';
import { SafeModeWrapperModule } from './components/safe-mode-wrapper/safe-mode-wrapper.module';
import { FormModule } from './form/form.module';
import { NewStoryV2RoutingModule } from './new-story-v2-routing.module';
import { NewStoryV2Component } from './new-story-v2.component';

@NgModule({
  declarations: [NewStoryV2Component, ShareYourExperienceWrapperComponent],
  imports: [
    CommonModule,
    CyModule,
    FormModule,
    SafeModeWrapperModule,
    SharedModule,
    SubpageFooterModule,
    SubpageHeaderModule,
    NewStoryV2RoutingModule,
  ],
  exports: [NewStoryV2Component],
})
export class NewStoryV2Module {}
