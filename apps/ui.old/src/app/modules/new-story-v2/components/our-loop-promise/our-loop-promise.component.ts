import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WhatHappenNextModalComponent } from '@app/modules/new-story-v2/modals/what-happen-next-modal/what-happen-next-modal.component';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';

@Component({
  selector: 'app-our-loop-promise',
  templateUrl: './our-loop-promise.component.html',
  styleUrls: ['./our-loop-promise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurLoopPromiseComponent {
  @Input() isSensitive: boolean;

  get heading(): string {
    return this.isSensitive ? 'newStoryV2.ourloopPromise.sensitive.heading' : 'newStoryV2.ourloopPromise.nonSensitive.heading';
  }

  get content(): string {
    return this.isSensitive ? 'newStoryV2.ourloopPromise.sensitive.content' : 'newStoryV2.ourloopPromise.nonSensitive.content';
  }

  constructor(private modalService: ModalServiceV2) {}

  onModalOpen(): void {
    this.modalService.open(WhatHappenNextModalComponent);
  }
}
