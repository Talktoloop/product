import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';

import { AudioPlayerComponent } from '@shared/components/audio-player/audio-player.component';

import { PlayerComponent } from '@shared/components/audio-player/player/player.component';

import { TooltipDirectiveModule } from '@shared/directives/tooltip/tooltip.directive.module';

import { LoopDesignSystemModule } from '@shared/loop-design-system/loop-design-system.module';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/shared.module';
import { SimplePlayerComponent } from './simple-player/simple-player.component';
import { InlineLoadingModule } from '../inline-loading/inline-loading.module';

@NgModule({
  declarations: [AudioPlayerComponent, PlayerComponent, SimplePlayerComponent],
  exports: [AudioPlayerComponent],
  imports: [CommonModule, SharedModule, LoopDesignSystemModule, MatSliderModule, TooltipDirectiveModule, TranslateModule, InlineLoadingModule],
})
export class AudioPlayerModule {}
