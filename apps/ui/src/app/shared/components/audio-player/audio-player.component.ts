import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnDestroy, ViewChild } from '@angular/core';
import { IVRRService } from '@app/core/services/api/ivrr/ivrr';
import { LocalStorageKeys, LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { AudioPlayerState } from '@shared/components/audio-player/audio-player.enum';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('audio') audioRef: ElementRef<HTMLAudioElement>;
  @Input() isEscapeButtonEnable = false;
  @Input() isSimplePlayer: boolean;
  @Input() s3FileId: string;
  @Input() set audioSrc(value: string) {
    this._audioSrc = value;
    this.setAudioEventListener();
  }
  get audioSrc(): string {
    return this._audioSrc;
  }

  get audio(): HTMLAudioElement {
    return this._audio;
  }

  state = AudioPlayerState.Suspended;
  duration = 0;
  currentTime = 0;

  private _audioSrc: string;
  private _audio: HTMLAudioElement;

  constructor(private storageService: LocalStorageService, private ivrrService: IVRRService, private audioService: AudioService, private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    if (!this.isSimplePlayer) {

      this.setAudioEventListener();
    }

    this.audioService.audioStopped$.subscribe({
      next: (s3FileId) => {
        if (this.s3FileId === s3FileId) {
          this.state = AudioPlayerState.Suspended;
        }
      }
    })
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.removeEventListener('canplay', null);
      this.audio.removeEventListener('timeupdate', null);
      this.audio.removeEventListener('ended', null);
      this.audio.pause();
      this.audioRef = null;
    }

    if (this.isSimplePlayer) {
      this.audioService.stopAudio();
      this.audioService.audioLoaded = false;
    }
  }

  onClick(): void {
    if (!this.isSimplePlayer) {
      this.onNotSimplePlayerClick()
      return;
    }

    this.onSimplePlayerClick();
  }

  onSimplePlayerClick() {
    if (this.state === AudioPlayerState.Running) {
      this.audioService.stopAudio()
      this.state = AudioPlayerState.Suspended;
    }
    else {
      if (!this.audioService.audioLoaded || this.audioService.s3FileId !== this.s3FileId) {
        this.audioService.stopAudio();
        this.state = AudioPlayerState.Loading
        this.ivrrService.getSignedUrlForS3Audio(this.s3FileId).subscribe(
          {
            next: (audioSrc) => {
              this.state = AudioPlayerState.Running;
              this.audioService.initAudio(audioSrc, this.s3FileId)
              this.cdRef.detectChanges();
              this.audioService.currentAudio.addEventListener('ended', () => this.onEnded());
            }
          }
        )
      }
      else {
        this.audioService.playAudio()
        this.state = AudioPlayerState.Running;
      }
    }
  }

  onNotSimplePlayerClick() {
    if (this.state === AudioPlayerState.Running) {
      this.audio?.pause();
      this.state = AudioPlayerState.Suspended;
    } else {
      this.audio?.play();
      this.state = AudioPlayerState.Running;
    }
  }

  setCurrentTime($event: number): void {
    if (this.audio) {
      this.audio.currentTime = $event;
    }
  }

  private setAudioEventListener(): void {
    if (this.audioSrc) {
      this._audio = this.audioRef?.nativeElement;
      this.audio?.addEventListener('canplay', ($event: Event) => this.onTimeUpdate($event));
      this.audio?.addEventListener('timeupdate', ($event: Event) => this.onTimeUpdate($event));
      this.audio?.addEventListener('ended', () => this.onEnded());
    }
  }

  private onEnded(): void {
    this.state = AudioPlayerState.Closed;
  }

  private onTimeUpdate($event: Event): void {
    const target = $event.target as HTMLAudioElement;
    this.duration = target.duration;
    this.currentTime = target.currentTime;
  }

  @HostListener('document:keyup.escape', ['$event'])
  onKeyupHandler() {
    if (this.isEscapeButtonEnable) {
      this?.onClick();
    }
  }

  get isEscapeInfoActive(): boolean {
    const key = this.storageService.get(LocalStorageKeys.INBOX_IVRR_AUDIO_RECORDER_ESCAPE_KEY_INFO);
    return !key || key === 'false';
  }

  onEscapeInfoSubmit(): void {
    this.storageService.set(LocalStorageKeys.INBOX_IVRR_AUDIO_RECORDER_ESCAPE_KEY_INFO, 'true');
  }
}
