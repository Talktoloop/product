import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatLegacySliderChange as MatSliderChange } from '@angular/material/legacy-slider';
import { AudioPlayerState } from '@shared/components/audio-player/audio-player.enum';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  LoopIcon = LoopIcon;
  @Input() duration: number;
  @Input() currentTime: number;
  @Input() state: AudioPlayerState;
  @Output() click$ = new EventEmitter<void>();
  @Output() currentTime$ = new BehaviorSubject<number>(0);

  getProgress(): number {
    if (isNaN(this.currentTime) || !this.currentTime) {
      this.currentTime = 0;
    }
    if (isNaN(this.duration) || !this.duration) {
      this.duration = 0;
    }

    const progressBarProgress = this.currentTime / this.duration;
    return isNaN(progressBarProgress) ? 0 : progressBarProgress;
  }

  getIconName(): LoopIcon.Name {
    switch (this.state) {
      case AudioPlayerState.Running:
        return LoopIcon.Name.AudioPlayerPause;
      case AudioPlayerState.Suspended:
        return LoopIcon.Name.AudioPlayerPlay;
      case AudioPlayerState.Closed:
        return LoopIcon.Name.AudioPlayerReplay;
    }
  }

  onChange($event: MatSliderChange): void {
    this.currentTime$.next($event.value * this.duration);
  }
}
