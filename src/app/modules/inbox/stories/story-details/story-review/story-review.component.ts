import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { IGetThematicAPIExtended } from '@app/core/services/api/model/response/get-thematic.model';
import { StoryDetailsService } from '../story-details.service';

@Component({
  selector: 'app-story-review',
  templateUrl: './story-review.component.html',
  styleUrls: ['./story-review.component.scss'],
})
export class StoryReviewComponent implements OnInit {
  CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;
  thematics: IGetThematicAPIExtended[];
  organisations: IBaseEntityN[];

  constructor(public storyDetailsService: StoryDetailsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.storyDetailsService.story = data.data.story;
      this.storyDetailsService.thematics = data.data.thematics;
    });
  }
}
