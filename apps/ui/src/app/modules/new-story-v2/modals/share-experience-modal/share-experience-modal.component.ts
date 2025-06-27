import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { Subject } from 'rxjs';

@Component({
  selector: 'loop-share-experience-modal',
  templateUrl: './share-experience-modal.component.html',
  styleUrls: ['./share-experience-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareExperienceModalComponent extends ModalBase {
  constructor(@Inject('close$') close$: Subject<any>, private location: Location, private uiService: UIService) {
    super(close$);
  }

  onConfirm(): void {
    this.uiService.removeBodyClass('overflow-hidden')
    this.location.back();
  }

  onModalClose(): void {
    this.location.back();
    this.location.back();
  }
}
