import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { RtlService } from '../../../../../core/services/locales/rtl.service';
import { UserLanguageService } from '../../../../../core/services/locales/user-language.service';
import { BaseComponent } from '../../../../../shared/components/base.component';

const SLIDER_TRANSITION_TIME = 400;

@Component({
  selector: 'loop-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild('viewport') viewport: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('sliderTrack') sliderTrack: ElementRef;
  renderedSlides = [sliderOptions[sliderOptions.length - 1], ...sliderOptions];
  currSlide = 1;
  translateX: number;

  animating: boolean;
  wrapperWidth: number;
  sliderOptions = sliderOptions;

  isRtl = false;

  constructor(private cdr: ChangeDetectorRef, private rtlService: RtlService, private userLanguageService: UserLanguageService) {
    super();
  }

  checkRtl(): void {
    const oldRtl = this.isRtl;
    this.isRtl = this.rtlService.isRtlLanguage(this.userLanguageService.getLanguage());
    if (this.isRtl !== oldRtl) {
      this.translateX = -this.translateX;
      this.cdr.detectChanges();
    }
  }

  ngOnInit(): void {
    this.checkRtl();
    this.userLanguageService.languageChanged$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.checkRtl());
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.runResizeCalculations(), 1);
  }

  runResizeCalculations(): void {
    this.wrapperWidth = this.wrapper.nativeElement.clientWidth;
    this.translateX = this.isRtl ? this.viewport.nativeElement.clientWidth : -this.viewport.nativeElement.clientWidth;
    this.cdr.detectChanges();
  }

  changeSlide(next = true): void {
    const width = this.viewport.nativeElement.clientWidth;
    this.sliderTrack.nativeElement.style.transition = '0.3s';
    this.translateX = next ? (this.isRtl ? 2 * width : -(2 * width)) : 0;
    this.animating = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.sliderTrack.nativeElement.style.transition = undefined;
      this.translateX = this.isRtl ? width : -width;
      this.renderedSlides = this.renderedSlides.map((slide) => this.getNextSliderOption(slide, next ? 1 : -1));
      this.currSlide = this.renderedSlides[1].order;
      this.animating = false;
      this.cdr.detectChanges();
    }, SLIDER_TRANSITION_TIME);
  }

  private getNextSliderOption(oldSlide: SliderOption, difference: number): SliderOption {
    const orderSum = oldSlide.order + difference;
    let newOrder;
    if (orderSum > sliderOptions.length) {
      newOrder = 1;
    } else {
      newOrder = orderSum === 0 ? sliderOptions.length : orderSum;
    }
    return sliderOptions.find((opt) => opt.order === newOrder);
  }

  @HostListener('window:resize')
  onResize(): void {
    setTimeout(() => this.runResizeCalculations(), 50);
  }
}

interface SliderOption {
  order: number;
  iconName: string;
  titleTranslationKey: string;
  descriptionTranslationKey: string;
}

const sliderOptions: SliderOption[] = [
  {
    order: 1,
    iconName: 'submit_story',
    titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.submitStory.title',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.submitStory.description',
  },
  {
    order: 2,
    iconName: 'moderator_review',
    titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.moderatorReview.title',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.moderatorReview.description',
  },
  {
    order: 3,
    iconName: 'case_manager_review',
    titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.caseManagerReview.title',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.caseManagerReview.description',
  },
  {
    order: 4,
    iconName: 'story-case',
    titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.storyCase.title',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.storyCase.description',
  },
  {
    order: 5,
    iconName: 'process_and_refer',
    titleTranslationKey: 'statisticsCases.processAndRefer',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.processAndRefer.description',
  },
  {
    order: 6,
    iconName: 'response_to_referral',
    titleTranslationKey: 'statisticsCases.responseToReferral',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.responseToReferral.description',
  },
  {
    order: 7,
    iconName: 'decision_to_investigate',
    titleTranslationKey: 'statisticsCases.decisionToInvestigate',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.decisionToInvestigate.description',
  },
  {
    order: 8,
    iconName: 'investigation',
    titleTranslationKey: 'statisticsCases.investigation',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.investigation.description',
  },
  {
    order: 9,
    iconName: 'author_informed',
    titleTranslationKey: 'statisticsCases.accountabilityProcess.slider.authorInformed.title',
    descriptionTranslationKey: 'statisticsCases.accountabilityProcess.slider.authorInformed.description',
  },
];
