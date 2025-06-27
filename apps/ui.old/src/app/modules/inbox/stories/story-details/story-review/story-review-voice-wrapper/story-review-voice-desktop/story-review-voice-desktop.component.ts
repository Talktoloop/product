import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IVRRService } from '@app/core/services/api/ivrr/ivrr';
import { ICallIVRR } from '@app/core/services/api/model/story.model';
import { Observable, takeUntil } from 'rxjs';
import { StoryReviewGlobalComponent } from '../../../shared/story-review-global/story-review-global.component';
import { StoryDetailsService } from '../../../story-details.service';
import { FixedElementData } from '@app/core/services/fixed-positioning/fixed-position.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { FixedPositioning } from '@app/core/services/fixed-positioning/fixed-positioning';

@Component({
  selector: 'app-story-review-voice-desktop',
  templateUrl: './story-review-voice-desktop.component.html',
  styleUrls: ['./story-review-voice-desktop.component.scss'],
})
export class StoryReviewVoiceDesktopComponent extends StoryReviewGlobalComponent implements OnInit, AfterViewInit {
  audioSrc$: Observable<string>;
  @ViewChild('storyReviewContainer') storyReviewContainerElement: ElementRef;
  @ViewChild('storyDetails') storyDetailsElement: ElementRef;

  rightSectionTabs: string[] = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation', 'story.details.review.tabs.authorHistory'];


  private fixedElementData: FixedElementData;

  constructor(storyDetailsService: StoryDetailsService, private ivrrService: IVRRService,
    private ui: UIService,
    private fixedPositioning: FixedPositioning,
    private renderer: Renderer2,
  ) {
    super(storyDetailsService);
  }

  ngOnInit(): void {
    this.setAudioToTranscribe();
  }

  setAudioToTranscribe(): void {
    const s3FileId = this.storyDetailsService.story.calls.find((call: ICallIVRR) => call.isStory).s3FileId;
    this.audioSrc$ = this.ivrrService.getSignedUrlForS3Audio(s3FileId);
  }

  ngAfterViewInit(): void {
    const isMobileView = this.ui.mobileView$.getValue();
    if (!isMobileView) {
      this.setDynamicHeight();
    }
    this.enableFixedPositioning();
  }

  private enableFixedPositioning(): void {
    this.fixedElementData = {
      containerElement: this.storyReviewContainerElement.nativeElement,
      documentTopPadding: 70,
      fixedElement: this.storyDetailsElement.nativeElement,
      fixedElementPadding: 32,
    };
    this.ui.mobileView$.pipe(takeUntil(this.destroyed$)).subscribe((isMobile: boolean) => {
      setTimeout(() => this.fixedPositioning.positionFixedElement(this.fixedElementData, isMobile), 0);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.fixedPositioning.positionFixedElement(this.fixedElementData, this.ui.mobileView$.getValue() || this.ui.tabletView$.getValue());
  }

  private setDynamicHeight(): void {
    const windowHeight = window.innerHeight;
    const calculatedHeight = windowHeight * 0.8;

    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'height', 'auto');
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'max-height', `${calculatedHeight}px`);
    this.renderer.setStyle(this.storyDetailsElement.nativeElement, 'overflow-y', 'auto');
  }
}
