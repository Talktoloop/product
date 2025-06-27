import { Component, OnInit } from '@angular/core';
import { IVRRService } from '@app/core/services/api/ivrr/ivrr';
import { ICallIVRR } from '@app/core/services/api/model/story.model';
import { Observable } from 'rxjs';
import { StoryReviewGlobalComponent } from '../../../shared/story-review-global/story-review-global.component';
import { StoryDetailsService } from '../../../story-details.service';

@Component({
  selector: 'app-story-review-voice-mobile',
  templateUrl: './story-review-voice-mobile.component.html',
  styleUrls: ['./story-review-voice-mobile.component.scss'],
})
export class StoryReviewVoiceMobileComponent extends StoryReviewGlobalComponent implements OnInit {
  //translation keys
  rightSectionTabs: string[] = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation', 'story.details.review.tabs.authorHistory'];
  audioSrc$: Observable<string>;

  constructor(storyDetailsService: StoryDetailsService, private ivrrService: IVRRService) {
    super(storyDetailsService);
  }

  ngOnInit(): void {
    this.setAudioToTranscribe();
  }

  setAudioToTranscribe(): void {
    const s3FileId = this.storyDetailsService.story.calls.find((call: ICallIVRR) => call.isStory).s3FileId;
    this.audioSrc$ = this.ivrrService.getSignedUrlForS3Audio(s3FileId);
  }
}
