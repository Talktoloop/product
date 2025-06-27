import { Component, Inject } from '@angular/core';
import { AccessType } from '@app/core/services/api/model/request/subscription.model';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-request-premium-modal',
  templateUrl: './request-premium-modal.component.html',
  styleUrls: ['./request-premium-modal.component.scss'],
})
export class RequestPremiumModalComponent extends ModalBase {
  constructor(
    @Inject('close$') close$: Subject<void>,
    private profileService: ProfileService,
    private toastrService: ToastrService,
    private translateService: TranslateService,
  ) {
    super(close$);
  }

  onCancel() {
    this.close$.next(null);
  }

  onRequestLoopPremium(freeOfCharge: boolean) {
    this.profileService.sendSubscriptionRequest({ access: freeOfCharge ? AccessType.Free : AccessType.Paid }).subscribe({
      next: () => {
        this.toastrService.success(
          this.translateService.instant('requestPremium.description'),
          this.translateService.instant('requestPremium.title'),
        );
        this.close$.next(true);
      },
    });
  }
}
