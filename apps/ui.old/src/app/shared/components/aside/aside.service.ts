import { Injectable, TemplateRef } from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';
import { BehaviorSubject, Observable } from 'rxjs';

export enum AsidePosition {
  LEFT = 'left',
  RIGHT = 'right',
}

interface AsideConfig {
  position: AsidePosition;
}

interface Aside {
  templateRef: TemplateRef<any>;
  config: AsideConfig;
}

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  private currentAside$ = new BehaviorSubject<Aside | null>(null);

  aside$: Observable<Aside | null> = this.currentAside$.asObservable();

  private readonly defaultConfig: AsideConfig = { position: AsidePosition.LEFT };

  constructor(private uiService: UIService) { }

  openAside(templateRef: TemplateRef<any>, config: AsideConfig = this.defaultConfig): void {
    this.currentAside$.next({ templateRef, config });
    this.uiService.addBodyClass('overflow-hidden');
  }

  closeAside(): void {
    if (this.currentAside$.value)
      this.uiService.removeBodyClass('overflow-hidden');
    this.currentAside$.next(null);
  }
}
