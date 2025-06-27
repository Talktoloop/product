import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_STATIC_LINKS, SOCIAL_LINKS, STATIC_LINKS } from '@core/header/header.constants';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { UIService } from '@core/services/ui/ui.service';
import { BaseComponent } from '@shared/components/base.component';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent extends BaseComponent {
  @Output() closed = new EventEmitter<void>();

  readonly menuStaticLinks: LinkModel[] = MENU_STATIC_LINKS;
  readonly staticLinks: LinkModel[] = STATIC_LINKS;
  readonly socialLinks: SocialLinkModel[] = SOCIAL_LINKS;

  constructor(private profileService: ProfileService, private uiService: UIService, private router: Router) {
    super();
    this.listenToRouterChange();
  }

  linkTrackFn(_: number, link: LinkModel): any {
    return link.code;
  }

  closeAside(): void {
    this.closed.emit();
  }

  private listenToRouterChange(): void {
    this.router.events
      .pipe(
        filter((event) => !!event),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => this.closed.emit());
  }
}

interface LinkModel {
  code: string;
  routerLink?: string;
  target?: string;
  url?: string | string[];
}

interface SocialLinkModel extends LinkModel {
  imagePath: string;
}
