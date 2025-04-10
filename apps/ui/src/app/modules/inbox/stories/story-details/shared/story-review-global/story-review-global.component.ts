import { Component } from '@angular/core';
import { BaseComponent } from '@app/shared/components/base.component';
import { BannerTheme } from '@app/shared/loop-design-system/components/banner/banner-theme.enum';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { takeUntil } from 'rxjs/operators';
import { StoryDetailsService } from '../../story-details.service';

@Component({ template: '' })
export abstract class StoryReviewGlobalComponent extends BaseComponent {
  public submittingError = false;
  public BannerTheme = BannerTheme;
  public LoopIcon = LoopIcon;

  protected constructor(public storyDetailsService: StoryDetailsService) {
    super();

    this.watchFormSubmitError();
  }

  private watchFormSubmitError(): void {
    this.storyDetailsService.reviewSubmitError$.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.submittingError = value;
    });
  }
}
