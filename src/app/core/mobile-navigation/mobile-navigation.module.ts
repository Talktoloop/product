import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewStoryButtonComponent } from '@core/header/components/new-story-button/new-story-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { FabButtonModule } from '@shared/components/fab-button/fab-button.module';
import { AddCircleIconModule } from '@shared/icons/add-circle-icon/add-circle-icon.module';
import { MobileNavigationComponent } from './mobile-navigation.component';

@NgModule({
  declarations: [MobileNavigationComponent, NewStoryButtonComponent],
  exports: [MobileNavigationComponent],
  imports: [CommonModule, RouterModule, TranslateModule, FabButtonModule, AddCircleIconModule, ButtonModule],
})
export class MobileNavigationModule {}
