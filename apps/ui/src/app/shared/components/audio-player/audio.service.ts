import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  currentAudio: HTMLAudioElement
  audioLoaded: boolean
  s3FileId: string;
  audioStopped$ = new Subject<string>()


  initAudio(audioSrc: string, s3FileId: string) {
    this.s3FileId = s3FileId
    this.currentAudio = new Audio(audioSrc);
    this.currentAudio.load();
    this.audioLoaded = true;
    this.currentAudio.play();
  }


  playAudio() {
    this.currentAudio.play();
  }

  stopAudio() {
    if (this.currentAudio) {
      this.currentAudio.removeEventListener('ended', null);
      this.currentAudio.pause();
      this.audioStopped$.next(this.s3FileId)
    }
  }
}
