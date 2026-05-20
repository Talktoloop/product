import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { IStory } from '@core/services/api/model/story.model';
import { TranslateService } from '@ngx-translate/core';
import { GENDER_MAPPING } from '@shared/types';
import { DIFFICULTY_TRANSLATE_MAPPING } from '@shared/types/difficulty.type';
import { AGE_MAPPING_EXTENDED } from "@shared/types/age.type";

@Component({
  selector: 'app-story-details-subheading',
  templateUrl: './story-details-subheading.component.html',
  styleUrls: ['./story-details-subheading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryDetailsSubheadingComponent {
  @Input() story: IStory;
  @Input() editableTags: boolean;
  @Output() dismissedTag = new EventEmitter();
  dismissedTags = [];
  readonly genderMapping = GENDER_MAPPING;
  readonly ageMapping = AGE_MAPPING_EXTENDED;

  get additionalInfo(): Array<{ id: string; title: string; type: string }> {
    const difficulties = this.story?.difficulties.map((el) => ({
      id: el.id,
      title: `${this.translateService.instant('global.difficulty')} ${this.translateService.instant(DIFFICULTY_TRANSLATE_MAPPING[el.id])}`,
      type: 'difficulties',
    }));
    const maternityStatus = this.story?.maternityStatus.map((el: any) => ({
      ...el,
      title: this.translateService.instant(`maternity.${el.code}`),
      type: 'maternityStatus',
    }));
    return [...(difficulties || []), ...(maternityStatus || [])];
  }

  constructor(private translateService: TranslateService, private cd: ChangeDetectorRef) {}

  dismissed(type: string, value): boolean {
    for (const dt of this.dismissedTags) {
      if (dt.type === type && dt.value === value) {
        return true;
      }
    }
    return false;
  }

  dismissTag(type: string, value): void {
    const val = {
      type,
      value,
    };
    this.dismissedTags.push(val);
    this.dismissedTag.emit(val);
    this.cd.markForCheck();
  }
}
