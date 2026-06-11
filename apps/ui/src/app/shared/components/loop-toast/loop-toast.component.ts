import { Component } from '@angular/core';
import { IndividualConfig, Toast, ToastPackage, ToastrService } from 'ngx-toastr';

interface ToastIndividualConfig extends IndividualConfig {
  buttons: any;
}

@Component({
  selector: 'app-loop-toast',
  templateUrl: './loop-toast.component.html',
  styleUrls: ['./loop-toast.component.scss'],
})
export class LoopToastComponent extends Toast {
  options: ToastIndividualConfig;

  constructor(protected toastrService: ToastrService, public toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  action(btn: any): void {
    this.toastPackage.triggerAction(btn);
    this.toastrService.clear();
  }

  onContentClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).closest('.toast-action-button')) {
      return;
    }
    if (this.options?.buttons?.length) {
      this.action(this.options.buttons[0]);
    }
  }

  removeToast(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.remove();
  }
}
