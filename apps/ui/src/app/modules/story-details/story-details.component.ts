import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { IStory } from '@core/services/api/model/story.model';
import { StoryService } from '@core/services/api/story/story.service';
import { UIService } from '@core/services/ui/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
})
export class StoryDetailsComponent implements OnInit {
  storyId: string;
  storiesLink = ['/', MAIN_ROUTES.STORIES];
  story$: Observable<IStory>;
  totalReplies = 0;

  constructor(
    private route: ActivatedRoute,
    public uiService: UIService,
    private storyService: StoryService,
    private router: Router,
    private cd: ChangeDetectorRef,
    public ui: UIService,
    private vps: ViewportScroller,
  ) { }

  ngOnInit(): void {
    this.storyId = this.route.snapshot.paramMap.get('id');
    this.story$ = this.storyService.getStory(this.storyId);
  }

  goToReplies(): void {
    this.vps.setOffset([0, 80]);
    this.vps.scrollToAnchor('comments-container');
  }

  totalRepliesChanged(repliesCount: number): void {
    this.totalReplies = repliesCount;
    this.cd.detectChanges();
  }

  goToStories(): void {
    this.router.navigate(this.storiesLink, { queryParams: { goBack: 1 } });
  }
}
