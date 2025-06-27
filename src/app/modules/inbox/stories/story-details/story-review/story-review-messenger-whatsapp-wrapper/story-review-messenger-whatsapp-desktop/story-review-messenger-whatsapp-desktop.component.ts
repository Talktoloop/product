import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { FixedElementData } from '@app/core/services/fixed-positioning/fixed-position.model';
import { FixedPositioning } from '@app/core/services/fixed-positioning/fixed-positioning';
import { UIService } from '@app/core/services/ui/ui.service';
import { takeUntil } from 'rxjs/operators';
import { StoryReviewGlobalComponent } from '../../../shared/story-review-global/story-review-global.component';
import { StoryDetailsService } from '../../../story-details.service';

@Component({
  selector: 'app-story-review-messenger-whatsapp-desktop',
  templateUrl: './story-review-messenger-whatsapp-desktop.component.html',
  styleUrls: ['./story-review-messenger-whatsapp-desktop.component.scss'],
})
export class StoryReviewMessengerWhatsappDesktopComponent extends StoryReviewGlobalComponent implements OnInit, AfterViewInit {
  CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;
  //translation keys
  reviewTabs: string[] = ['story.details.review.tabs.storyPreview'];

  @ViewChild('storyReviewContainer') storyReviewContainerElement: ElementRef;
  @ViewChild('storyDetails') storyDetailsElement: ElementRef;

  rightSectionTabs: string[] = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation'];

  private fixedElementData: FixedElementData;

  constructor(
    storyDetailsService: StoryDetailsService,
    private ui: UIService,
    private fixedPositioning: FixedPositioning,
    private renderer: Renderer2,
  ) {
    super(storyDetailsService);
  }

  ngOnInit(): void {
    let reviewConversationTab = 'story.details.review.tabs.smsConversation';

    if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.MESSENGER) {
      reviewConversationTab = 'story.details.review.tabs.messengerConversation';
    } else if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.WHATSAPP) {
      reviewConversationTab = 'story.details.review.tabs.whatsAppConversation';
    } else if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.TELEGRAM) {
      reviewConversationTab = 'story.details.review.tabs.telegramConversation';
    }

    this.reviewTabs.unshift(reviewConversationTab);
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
