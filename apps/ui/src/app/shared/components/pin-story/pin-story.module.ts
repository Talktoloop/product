import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PinStoryComponent } from '@shared/components/pin-story/pin-story.component';
import { PinIconUnfilledModule } from '@shared/icons/pin-icon-unfilled/pin-icon-unfilled.module';
import { PinIconModule } from '@shared/icons/pin-icon/pin-icon.module';

@NgModule({
  declarations: [PinStoryComponent],
  exports: [PinStoryComponent],
  imports: [PinIconUnfilledModule, PinIconModule, TranslateModule, CommonModule],
})
export class PinStoryModule {}
