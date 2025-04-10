import { Component } from '@angular/core';
import { StoryTranslateGlobalComponent } from '../../shared/story-translate-global/story-translate-global.component';

@Component({
  selector: 'app-story-translate-mobile',
  templateUrl: './story-translate-mobile.component.html',
  styleUrls: ['./story-translate-mobile.component.scss'],
})
export class StoryTranslateMobileComponent extends StoryTranslateGlobalComponent {
  //translation keys
  rightSectionTabs: string[] = ['story.details.translate.tabs.translation', 'story.details.review.tabs.storyInformation'];
}
