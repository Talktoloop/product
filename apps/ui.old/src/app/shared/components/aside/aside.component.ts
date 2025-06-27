import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BaseComponent } from '@shared/components/base.component';
import { filter, takeUntil } from 'rxjs/operators';
import { AsideService } from './aside.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent extends BaseComponent implements OnInit {
  constructor(public asideService: AsideService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => this.asideService.closeAside());
  }
}
