import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeRepresentDirective } from '@app/modules/dev-components/code-represent.directive';
import { DevComponentsComponent } from '@app/modules/dev-components/dev-components.component';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { LocationFilterModule } from '@app/shared/components/filters-section-v2/location-filter/location-filter.module';
import { LocationModule } from '@app/shared/components/location/location.module';
import { RadioModule } from '@app/shared/components/radio/radio.module';
import { BannerModule } from '@app/shared/loop-design-system/components/banner/banner.module';
import { TagsModule } from '@app/shared/loop-design-system/components/tags/tags.module';
import { AudioPlayerModule } from '@shared/components/audio-player/audio-player.module';
import { AudioRecorderModule } from '@shared/components/audio-recorder/audio-recorder.module';
import { LoopDesignSystemModule } from '@shared/loop-design-system/loop-design-system.module';

@NgModule({
  imports: [
    CommonModule,
    LoopDesignSystemModule,
    ButtonModule,
    AudioPlayerModule,
    TagsModule,
    BannerModule,
    AudioRecorderModule,
    LocationModule,
    LocationFilterModule,
    RadioModule,
  ],
  declarations: [DevComponentsComponent, CodeRepresentDirective],
  exports: [CodeRepresentDirective],
})
export class DevComponentsModule {}
