import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { AudioRecorderComponent } from '@shared/components/audio-recorder/audio-recorder.component';
import { RecorderComponent } from '@shared/components/audio-recorder/player/recorder.component';
import { LoopDesignSystemModule } from '@shared/loop-design-system/loop-design-system.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AudioRecorderComponent, RecorderComponent],
  exports: [AudioRecorderComponent],
  imports: [CommonModule, SharedModule, LoopDesignSystemModule, MatSliderModule, SharedModule],
})
export class AudioRecorderModule {}
