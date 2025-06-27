import { EventEmitter, Injectable } from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';

@Injectable({ providedIn: 'root' })
export class ModalRoutingService {
  private readonly bodyClass = 'overflow-hidden';
  private modalsCount = 0;
  protected modalsOpened = [];
  private preventTriggerBackMultipleTimeTimeout: number;
  private isHistoryBackBlocked: boolean;
  userClickedBackButton$ = new EventEmitter();

  constructor(private readonly ui: UIService) {
    window.addEventListener('popstate', () => {
      const lastOpenedModalId = this.modalsOpened[this.modalsOpened.length - 1];
      this.modalsOpened.pop();
      this.userClickedBackButton$.next(lastOpenedModalId);
    });
  }

  routeToModal() {
    this.lockBodyScroll();
    const url: URL = new URL(String(window.location));
    url.searchParams.append('modalOpenedId', String(this.modalsCount));
    window.history.pushState({}, '', String(url));
    this.modalsOpened.push(this.modalsCount);
    this.modalsCount++;
    return this.modalsCount - 1;
  }

  routeFromModal(isFromCloseButton: boolean) {
    const url: URL = new URL(String(window.location));
    const openedModalsIds = url.searchParams.getAll('modalOpenedId');

    if (!openedModalsIds?.length) {
      return;
    }

    this.unlockBodyScroll();
    if (isFromCloseButton) {
      this.isHistoryBackBlocked = true;
      window.history.back();
      this.preventTriggerBackMultipleTimeTimeout = setTimeout(() => {
        this.isHistoryBackBlocked = false;
      }, 1000);
    }
  }

  private lockBodyScroll(): void {
    this.ui.addBodyClass(this.bodyClass);
  }

  private unlockBodyScroll(): void {
    this.ui.removeBodyClass(this.bodyClass);
  }
}
