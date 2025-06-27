import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_ROUTES, INBOX_STORY_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { IStory } from '@app/core/services/api/model/story.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { StoryDetailsService } from '../story-details.service';

@Component({
  selector: 'app-story-translate',
  templateUrl: './story-translate.component.html',
  styleUrls: ['./story-translate.component.scss'],
})
export class StoryTranslateComponent implements OnInit {
  private story: IStory;

  constructor(
    public ui: UIService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storyDetailsService: StoryDetailsService,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.storyDetailsService.story = data.data.story;
    });
  }
}
