import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@app/core/header/header.module';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { InputModule } from '@app/shared/components/input/input.module';
import { SlideToggleModule } from '@app/shared/components/slide-toggle/slide-toggle.module';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthModule } from '../auth/auth.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    AuthModule,
    CommonModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    SlideToggleModule,
    ButtonModule,
    LoopDesignSystemModule,
    HeaderModule,
  ],
  exports: [ProfileComponent, ProfileRoutingModule],
})
export class ProfileModule {}
