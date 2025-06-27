import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_ROUTES, INBOX_STORY_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { RouteStep } from '@app/shared/components/route-stepper/route-step.model';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
})
export class StoryDetailsComponent implements OnInit {
  public steps: RouteStep[] = [];

  readonly backUrl = `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}`;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    if (!this.router.url.includes(INBOX_STORY_ROUTES.STORY_TRANSLATE) && !this.router.url.includes(INBOX_STORY_ROUTES.STORY_REVIEW)) {
      this.router.navigate([this.activatedRoute.snapshot.routeConfig.children?.[0].path], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  ngOnInit(): void {
    this.steps = this.activatedRoute.snapshot.data.steps;
  }
}
