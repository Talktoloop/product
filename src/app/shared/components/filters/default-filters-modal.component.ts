import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnDestroy, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { Subject } from 'rxjs';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultFiltersModalComponent extends ModalBase implements OnDestroy {
  @Input() form: UntypedFormGroup;
  @Output() clearAll = new EventEmitter();
  @Output() confirm = new EventEmitter<boolean>();

  isAllFilters: boolean;
  applyVisible: boolean;
  lastScrollTop: number;

  constructor(@Inject('close$') close$: Subject<boolean>) {
    super(close$);
  }

  onConfirm(): void {
    this.confirm.emit();
    this.onModalClose();
  }

  applyButtonVisibilityChange(visible: boolean): void {
    this.applyVisible = visible;
  }

  onApplyBtnFocus(): void {
    document.addEventListener('keydown', this.onTabKeyUp);
  }

  onTabKeyUp = (event: KeyboardEvent): void => {
    const applyBtn = this.getFirstChildOfHtmlElement('apply-button');
    if (document.activeElement === applyBtn) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.focusBackBtn();
      this.removeTabKeydownListener();
    }
  };

  private getFirstChildOfHtmlElement(className: string): HTMLElement {
    return (document.getElementsByClassName(className)?.[0] as HTMLElement)?.children?.[0] as HTMLElement;
  }

  private focusBackBtn(): void {
    this.getFirstChildOfHtmlElement('back-button').focus();
  }

  private removeTabKeydownListener(): void {
    document.removeEventListener('keyup', this.onTabKeyUp);
  }

  ngOnDestroy(): void {
    this.removeTabKeydownListener();
  }
}
