import { Component, Input } from '@angular/core';
import { TRANSLATION_TYPE } from '@core/services/api/model/story-translation';

@Component({
  selector: 'app-story-translation-type-icon',
  templateUrl: './story-translation-type-icon.component.html',
  styleUrls: ['./story-translation-type-icon.component.scss'],
})
export class StoryTranslationTypeIconComponent {
  @Input() translationType: TRANSLATION_TYPE;

  public readonly translationTypes = TRANSLATION_TYPE;
}
