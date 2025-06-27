import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';

@Component({
  selector: 'loop-what-happen-next-modal',
  templateUrl: './what-happen-next-modal.component.html',
  styleUrls: ['./what-happen-next-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatHappenNextModalComponent extends ModalBase {
  list = ['one', 'two', 'three', 'four'];
}
