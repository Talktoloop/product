import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'channelImageSrc',
})
export class ChannelImageSrcPipe implements PipeTransform {
  transform(channel: string): string {
    return `assets/icons/story-channel/${channel}.svg`;
  }
}
