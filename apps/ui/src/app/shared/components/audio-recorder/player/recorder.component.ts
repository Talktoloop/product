import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatLegacySliderChange as MatSliderChange } from '@angular/material/legacy-slider';
import { AudioPlayerState } from '@shared/components/audio-player/audio-player.enum';
import { AudioRecorderState, AudioRecorderStatus } from '@shared/components/audio-recorder/audio-recorder.enum';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.scss'],
})
export class RecorderComponent implements AfterViewInit, OnChanges {
  @ViewChild('wave') wave: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  readonly LoopIcon = LoopIcon;
  readonly AudioPlayerState = AudioPlayerState;
  readonly AudioRecorderStatus = AudioRecorderStatus;
  @Input() analyzer: AnalyserNode;
  @Input() duration: number;
  @Input() currentTime: number;
  @Input() status: AudioRecorderStatus;
  @Input() playerState: AudioPlayerState;
  @Input() recorderState: AudioRecorderState;
  @Output() click$ = new EventEmitter<void>();
  @Output() delete$ = new EventEmitter<void>();
  @Output() currentTime$ = new BehaviorSubject<number>(0);
  canvasWidth: number;
  private isDrawingWaveInProgress: boolean;

  getProgress(): number {
    return this.currentTime / this.duration;
  }

  getIconName(): LoopIcon.Name {
    if (this.status === AudioRecorderStatus.Playing) {
      switch (this.playerState) {
        case AudioPlayerState.Running:
          return LoopIcon.Name.AudioPlayerPause;
        case AudioPlayerState.Suspended:
          return LoopIcon.Name.AudioPlayerPlay;
        case AudioPlayerState.Closed:
          return LoopIcon.Name.AudioPlayerReplay;
      }
    } else if (this.status === AudioRecorderStatus.Recording) {
      switch (this.recorderState) {
        case AudioRecorderState.Inactive: {
          return LoopIcon.Name.AudioRecorderRecord;
        }
        case AudioRecorderState.Recording: {
          return LoopIcon.Name.AudioRecorderStop;
        }
        case AudioRecorderState.Paused:
          break;
      }
    }
  }

  onChange($event: MatSliderChange): void {
    this.currentTime$.next($event.value * this.duration);
  }

  getIconTheme(): LoopIcon.Theme {
    return this.status === AudioRecorderStatus.Recording ? LoopIcon.Theme.Danger : LoopIcon.Theme.Action;
  }

  isIdle(): boolean {
    return this.status === AudioRecorderStatus.Recording && this.recorderState === AudioRecorderState.Inactive;
  }

  drawAnalyzedStream(analyser: AnalyserNode) {
    const canvas: HTMLCanvasElement = this.canvas?.nativeElement;

    if (this.isDrawingWaveInProgress || !canvas) {
      return;
    }

    this.isDrawingWaveInProgress = true;
    const cWidth: number = canvas?.width,
      cHeight: number = canvas?.height,
      meterWidth = 2,
      gap = 1,
      meterNum = Math.trunc(cWidth / (meterWidth + gap)),
      ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.fillStyle = '#B21D39';

    const halfHeight = cHeight / 2;
    const drawMeter = () => {
      if (this.status !== AudioRecorderStatus.Recording) {
        return;
      }
      const array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);

      ctx.clearRect(0, 0, cWidth, cHeight);
      const step = Math.round(array.length / meterNum);
      for (let i = 0; i < meterNum; i++) {
        const meterPos = i * (meterWidth + gap);

        let value = Math.trunc((halfHeight / 256) * array[i * step] * 2);
        if (value < 1) {
          value = 1;
        }

        ctx.fillRect(meterPos, halfHeight, meterWidth, -1 * value);
        ctx.fillRect(meterPos, halfHeight, meterWidth, value);
      }
      requestAnimationFrame(drawMeter);
    };
    requestAnimationFrame(drawMeter);
  }

  ngOnChanges(): void {
    if (this.status === AudioRecorderStatus.Recording) {
      this.isDrawingWaveInProgress = false;
      this.drawAnalyzedStream(this.analyzer);
    }
  }

  ngAfterViewInit(): void {
    this.canvasWidth = this.wave.nativeElement.clientWidth;
  }
}
