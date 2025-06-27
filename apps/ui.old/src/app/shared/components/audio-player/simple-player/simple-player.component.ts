import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';
import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';
import { AudioPlayerState } from '../audio-player.enum';

@Component({
  selector: 'app-simple-player',
  templateUrl: './simple-player.component.html',
  styleUrls: ['./simple-player.component.scss'],
})
export class SimplePlayerComponent {
  LoopIcon = LoopIcon;
  AudioPlayerState = AudioPlayerState;
  @Input() state: AudioPlayerState;
  @Output() click$ = new EventEmitter<void>();

  constructor(private uiService: UIService) {}

  isMobile(): boolean {
    return this.uiService.mobileView;
  }

  getIconSource(): string {
    let iconName;
    switch (this.state) {
      case AudioPlayerState.Running:
        iconName = 'stop';
        break;
      case AudioPlayerState.Suspended:
      case AudioPlayerState.Closed:
        iconName = 'play';
        break;
    }

    return `assets/icons/simple-player/${iconName}.svg`;
  }

  getStatusText() {
    switch (this.state) {
      case AudioPlayerState.Running:
        return 'simplePlayer.playing';
      case AudioPlayerState.Suspended:
      case AudioPlayerState.Closed:
        return 'simplePlayer.play';
      case AudioPlayerState.Loading:
        return 'simplePlayer.loading';
    }
  }

  onClick(event: MouseEvent) {
    event.stopImmediatePropagation();
    this.click$.emit();
  }
}
