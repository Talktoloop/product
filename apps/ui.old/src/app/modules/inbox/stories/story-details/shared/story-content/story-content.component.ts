import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UIService } from '@app/core/services/ui/ui.service';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { StoryDetailsService } from '../../story-details.service';

@Component({
  selector: 'app-story-content',
  templateUrl: './story-content.component.html',
  styleUrls: ['./story-content.component.scss'],
})
export class StoryContentComponent implements OnInit, AfterViewInit {
  LoopIcon = LoopIcon;
  isEditEnable = this.getInitialEditButtonState();
  editedContentControl = new FormControl<string>({
    value: this.storyDetailsService.story.content,
    disabled: !this.storyDetailsService.isReviewStep,
  });
  originalContentControl = new FormControl<string>({
    value: this.getOriginalContentInitialValue(),
    disabled:
      this.storyDetailsService.story.channel !== CHANNEL_CONSTANTS.IVRR || this.isEditEnable || !this.storyDetailsService.isReviewStep,
  });
  canEdit = this.getCanEditInitialValue();

  constructor(public ui: UIService, public storyDetailsService: StoryDetailsService) {
    this.storyDetailsService.updatedOriginalStory = null;
    this.storyDetailsService.updatedEditedStory = null;
    this.storyDetailsService.isOriginalContentEditContainErrors = false;
    this.storyDetailsService.isEditedContentEditContainErrors = false;
  }

  ngOnInit(): void {
    this.storyDetailsService.reviewSubmitError$.subscribe(() => {
      this.originalContentControl.markAsTouched();
      this.originalContentControl.markAsDirty();
    });
    this.originalContentControl.valueChanges.subscribe((value: string) => {
      this.storyDetailsService.updatedOriginalStory = value;
      this.storyDetailsService.isOriginalContentEditContainErrors = Boolean(this.originalContentControl.errors);
      this.canEdit = this.getCanEditInitialValue();
    });
    this.editedContentControl.valueChanges.subscribe((value: string) => {
      this.storyDetailsService.updatedEditedStory = value;
      this.storyDetailsService.isEditedContentEditContainErrors = Boolean(this.editedContentControl.errors);
    });
    this.storyDetailsService.originalStoryContentChanged$.subscribe((isOriginalStoryChanged: boolean) => {
      if (isOriginalStoryChanged) {
        this.originalContentControl.setValue(this.storyDetailsService.story.content, { emitEvent: false, onlySelf: true });
        this.editedContentControl.setValue(null);
        this.isEditEnable = false;
      }
    });
  }

  onEditStateChange(value: boolean) {
    if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.IVRR) {
      value ? this.originalContentControl.disable() : this.originalContentControl.enable();
    }
    if (value) {
      this.originalContentControl.setValue(
        this.storyDetailsService.story.historicalContent || this.storyDetailsService.story.content || this.originalContentControl.value,
        {
          emitEvent: false,
          onlySelf: true,
        },
      );
      this.editedContentControl.setValue(this.editedContentControl.value || this.originalContentControl.value);
      this.originalContentControl.markAsPristine();
      this.originalContentControl.markAsUntouched();
    } else {
      this.storyDetailsService.getStoryWithRestoredTranslation().then(() => {
        this.editedContentControl.setValue(null);
        this.originalContentControl.setValue(
          this.storyDetailsService.story.historicalContent || this.storyDetailsService.story.content || this.originalContentControl.value,
          {
            emitEvent: false,
            onlySelf: true,
          },
        );
      });
      this.editedContentControl.markAsPristine();
      this.editedContentControl.markAsUntouched();
    }
    this.isEditEnable = value;
  }

  getCustomErrorKeys(): Map<string, string> {
    return new Map<string, string>()
      .set('minlength', 'story.details.review.editStory.minLengthErrorMessage')
      .set('required', 'story.details.review.editStory.minLengthErrorMessage');
  }

  ngAfterViewInit(): void {
    this.isEditEnable = this.getInitialEditButtonState();
    const originalContent = this.getOriginalContentInitialValue();
    if (!originalContent) {
      this.storyDetailsService.isOriginalContentEditContainErrors = true;
    }
    this.originalContentControl.setValue(originalContent, { emitEvent: false, onlySelf: true });
  }

  private getInitialEditButtonState() {
    return Boolean(
      this.storyDetailsService.story.historicalContent &&
        this.storyDetailsService.story.historicalContent.trim() !== this.storyDetailsService.story.content.trim(),
    );
  }

  private getOriginalContentInitialValue() {
    return this.storyDetailsService.isReviewStep
      ? this.storyDetailsService.story.historicalContent || this.storyDetailsService.story.content
      : this.storyDetailsService.story.content;
  }

  private getCanEditInitialValue() {
    return !(this.originalContentControl.getRawValue().length >= 5);
  }
}
