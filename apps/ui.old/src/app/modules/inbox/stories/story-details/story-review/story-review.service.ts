import { Injectable } from '@angular/core';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { IGetThematicAPIExtended } from '@app/core/services/api/model/response/get-thematic.model';
import { IStory } from '@app/core/services/api/model/story.model';

@Injectable()
export class StoryReviewService {
  public story: IStory;
  public thematics: IGetThematicAPIExtended[];
  public organisations: IBaseEntityN[];
}
