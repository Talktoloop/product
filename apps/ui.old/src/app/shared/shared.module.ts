import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostDetailsHelperService } from '@shared/components/post/post-details-helper.service';
import { DurationPipe } from '@shared/pipes/duration.pipe';
import { AdvancedEmailValidator } from './custom-validators/advanced-email.directive';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import { InvalidFocusableDirective } from './directives/invalid-focusable/invalid-focusable.directive';
import { StopEventDirective } from './directives/stop-event/stop-event.directive';
import { ChannelImageSrcPipe } from './pipes/channel-image-src.pipe';
import { ChannelPipe } from './pipes/channel.pipe';
import { CountryFlagSrcPipe } from './pipes/country-flag-src.pipe';
import { CountryPipe } from './pipes/country.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { SortByCountryNamePipe } from './pipes/sort-by-country-name.pipe';
import { StartHighlightPipe } from './pipes/start-highlight.pipe';
import { TextMaxLengthPipe } from './pipes/text-max-length.pipe';
import { WordCountPipe } from './pipes/word-count.pipe';

@NgModule({
  declarations: [
    AdvancedEmailValidator,
    ChannelPipe,
    ClickOutsideDirective,
    CountryFlagSrcPipe,
    CountryPipe,
    ChannelImageSrcPipe,
    InvalidFocusableDirective,
    SortByCountryNamePipe,
    StopEventDirective,
    TextMaxLengthPipe,
    DurationPipe,
    HighlightPipe,
    StartHighlightPipe,
    WordCountPipe,
  ],
  imports: [CommonModule],
  exports: [
    AdvancedEmailValidator,
    ChannelPipe,
    ClickOutsideDirective,
    CountryFlagSrcPipe,
    CountryPipe,
    InvalidFocusableDirective,
    SortByCountryNamePipe,
    StopEventDirective,
    TextMaxLengthPipe,
    DurationPipe,
    HighlightPipe,
    StartHighlightPipe,
    ChannelImageSrcPipe,
    WordCountPipe,
  ],
  providers: [CountryPipe, PostDetailsHelperService],
})
export class SharedModule {}
