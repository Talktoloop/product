import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-what-next-modal',
  templateUrl: './what-next-modal.component.html',
  styleUrls: ['./what-next-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatNextModalComponent extends ModalBase {
  onCommunityGuidelinesClick(): void {
    // TODO
  }
}
