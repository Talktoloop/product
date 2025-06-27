import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AudioPlayerState } from '@shared/components/audio-player/audio-player.enum';
import { AudioRecorderState, AudioRecorderStatus } from './audio-recorder.enum';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss'],
})
export class AudioRecorderComponent implements OnDestroy, OnInit {
  @Output() record = new EventEmitter<Blob>();
  @Input() audioSrc: string;
  chunks: Array<Blob> = [];
  duration = 0;
  currentTime = 0;
  status = AudioRecorderStatus.Recording;
  playerState = AudioPlayerState.Suspended;
  recorderState = AudioRecorderState.Inactive;
  private audio: HTMLAudioElement;
  private mediaRecorder: MediaRecorder;
  private addRecordTimeInterval: number;
  analyzer: AnalyserNode;

  ngOnInit(): void {
    if (this.audioSrc) {
      this.initPlayer();
      this.status = AudioRecorderStatus.Playing;
    } else {
      this.status = AudioRecorderStatus.Recording;
    }
  }

  onClick(): void {
    if (this.status === AudioRecorderStatus.Recording) {
      if (this.recorderState === AudioRecorderState.Inactive) {
        this.initRecording();
      } else if (this.recorderState === AudioRecorderState.Recording) {
        this.mediaRecorder.stop();
      }
    } else if (this.status === AudioRecorderStatus.Playing) {
      if (this.playerState === AudioPlayerState.Running) {
        this.audio.pause();
        this.playerState = AudioPlayerState.Suspended;
      } else {
        this.audio.play();
        this.playerState = AudioPlayerState.Running;
      }
    }
  }

  setCurrentTime($event: number): void {
    if (this.audio) {
      this.audio.currentTime = $event;
    }
  }

  initRecording() {
    const userMediaConstraints = {
      audio: {
        echoCancellation: true,
      },
    };

    navigator?.mediaDevices?.getUserMedia(userMediaConstraints).then((stream: MediaStream) => {
      this.createAnalyzer(stream);
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.addEventListener('stop', () => this.onStopRecording());
      this.mediaRecorder.addEventListener('dataavailable', ($event: BlobEvent) => this.onDataAvailable($event));
      this.recorderState = AudioRecorderState.Recording;
      this.duration = 1200;
      this.currentTime = 0;
      this.addRecordTimeInterval = setInterval(() => {
        this.currentTime++;
      }, 1000);
      this.mediaRecorder.start();
    });
  }

  onStopRecording() {
    this.mediaRecorder.stream.getAudioTracks().forEach((track: MediaStreamTrack) => track.stop());
    this.recorderState = AudioRecorderState.Inactive;
    this.audioSrc = URL.createObjectURL(this.chunks[0]) as string;
    this.record.emit(this.chunks[0]);
    clearInterval(this.addRecordTimeInterval);
    this.addRecordTimeInterval = null;
    this.mediaRecorder?.removeEventListener('stop', () => this.onStopRecording());
    this.mediaRecorder?.removeEventListener('dataavailable', ($event: BlobEvent) => this.onDataAvailable($event));
    this.mediaRecorder = null;
    this.initPlayer();
    this.chunks = [];
  }

  initPlayer() {
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    this.duration = this.currentTime;
    this.currentTime = 0;
    this.status = AudioRecorderStatus.Playing;
    this.audio.addEventListener('loadedmetadata', ($event: BlobEvent) => this.onTimeUpdate($event));
    this.audio.addEventListener('timeupdate', ($event: BlobEvent) => this.onTimeUpdate($event));
    this.audio.addEventListener('ended', () => this.onEnded());
  }

  onDelete() {
    this.ngOnDestroy();
    this.recorderState = AudioRecorderState.Inactive;
    this.playerState = AudioPlayerState.Suspended;
    this.status = AudioRecorderStatus.Recording;
    this.record.emit(null);
  }

  ngOnDestroy(): void {
    this.audio?.removeEventListener('canplay', null);
    this.audio?.removeEventListener('timeupdate', null);
    this.audio?.removeEventListener('ended', null);
    this.audio?.pause();
    this.audio = null;
  }

  private onEnded(): void {
    this.playerState = AudioPlayerState.Closed;
  }

  private async onTimeUpdate($event: BlobEvent) {
    const target = $event.target as HTMLAudioElement;

    this.currentTime = target.currentTime;
    if (target.duration === Infinity) {
      return;
    }
    this.duration = target.duration;
  }

  private onDataAvailable($event: BlobEvent) {
    this.chunks.push($event?.data);
  }

  private createAnalyzer(stream: MediaStream) {
    const context = new AudioContext();
    const audioInput = context.createMediaStreamSource(stream);
    const microphoneAudio = new Audio();
    const binaryData = [];
    binaryData.push(stream);
    microphoneAudio.src = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/json' }));
    const analyzer: AnalyserNode = context.createAnalyser();
    audioInput.connect(analyzer);
    this.analyzer = analyzer;
  }
}
