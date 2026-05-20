import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';
import { HomeService } from '@app/modules/home/home.service';
import { IStory } from '@core/services/api/model/story.model';
import { BaseComponent } from '@shared/components/base.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() storiesHeaderVisible = true;
  @Input() scrollToId = false;
  @Input() infiniteScrollContainer: string | HTMLElement; // string = css selector
  @Output() listLoaded = this.homeService.listLoaded;
  processedStoryId: string;
  isMobile: boolean;
  storyId: string;
  private deleteLastVisitedId: never;
  private alreadyScrolled = false;
  constructor(public homeService: HomeService, private uiService: UIService, private cd: ChangeDetectorRef) {
    super();
  }

  trackByFunction(i: string, item: IStory): string {
    return item?.content;
  }

  ngOnInit(): void {
    if (this.homeService.dataStream$.getValue()?.[0]) {
      this.homeService.listLoaded.next(null);
      this.cd.detectChanges();
    }

    this.uiService.mobileView$.subscribe((isMobileView) => {
      this.isMobile = isMobileView;
      this.cd.detectChanges();
    });
  }

  scrollToStory(targetStoryId: string): void {
    this.storyId = targetStoryId;
    const data = this.homeService.dataStream$.getValue();
    if (!data) return;
    if (this.alreadyScrolled || !this.homeService.lastStoryOpened$.getValue()) return;
    const storyIndex = data.findIndex((story: IStory) => story.id === targetStoryId);
    if (storyIndex !== -1) {
      setTimeout(() => {
        const element = document.getElementById(targetStoryId);
        if (element) {
          this.alreadyScrolled = true;
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    } else {
      this.homeService.onScroll();
      const subscription = this.homeService.dataStream$.subscribe((newData) => {
        if (newData) {
          const newIndex = newData.findIndex((story: IStory) => story.id === targetStoryId);
          if (newIndex !== -1) {
            setTimeout(() => {
              const element = document.getElementById(targetStoryId);
              if (element) {
                this.alreadyScrolled = true;
                element.scrollIntoView({ behavior: 'smooth', block: 'end' });
                subscription.unsubscribe();
              }
            });
          }
        }
      });
    }
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      const animationDelay = 1000;
      this.processedStoryId = this.homeService.removedObject$.getValue();
      if (this.homeService.lastVisitedId$.getValue()) {
        setTimeout(() => {
          window.scrollTo(0, this.homeService.scrollPos$.getValue());
        });
        setTimeout(() => {
          this.homeService.deleteElement(this.processedStoryId);
        }, animationDelay);
      }
      this.deleteLastVisitedId = setTimeout(() => {
        this.homeService.lastVisitedId$.next(null);
      }, animationDelay) as never;
      this.homeService.removedObject$.next(null);
    });
  }

  ngOnDestroy() {
    if (this.deleteLastVisitedId) {
      clearTimeout(this.deleteLastVisitedId);
    }
  }
}
