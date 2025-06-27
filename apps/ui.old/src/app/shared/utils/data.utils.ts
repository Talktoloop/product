import { Injectable } from '@angular/core';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { TranslateService } from '@ngx-translate/core';
import { COMMENT_STATUS } from '@shared/enums/comment-status.enum';
import { STORY_STATUS } from '@shared/enums/story-status.enum';

@Injectable()
export class DataUtils {
  constructor(private translateService: TranslateService) {}
  getCategories = (categories: string[]) => {
    let translatedString = '';
    categories.forEach((category: string, index: number) => {
      const translatedCategory = this.translateService.instant(`category.${category}`);
      translatedString += index !== 0 ? `, ${translatedCategory}` : translatedCategory;
    });

    return translatedString;
  };

  getLanguage(languageCode: string) {
    return languageCode ? this.translateService.instant(`languages.${languageCode}`) : '-';
  }

  getCountry(countryCode: string) {
    return countryCode ? this.translateService.instant(`country_name.${countryCode}`) : '-';
  }

  getChannel(channelCode: CHANNEL_CONSTANTS) {
    return this.translateService.instant(`filtersV2.channel.${channelCode}`);
  }

  getStoryStatus(status: STORY_STATUS): string {
    return `story.status.${status}`;
  }

  getCommentStatus(status: COMMENT_STATUS): string {
    return `comment.status.${status}`;
  }

  getStoryStatusImage(status: STORY_STATUS): string {
    if (status) {
      return `assets/icons/story-status/${status}.svg`;
    }
  }
}
