import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ModalServiceV2 } from '../../../../core/services/modal/modal-v2.service';
import { SeeProcessModalComponent } from './see-process/see-process-modal.component';

@Component({
  selector: 'loop-accountability-process',
  templateUrl: './accountability-process.component.html',
  styleUrls: ['./accountability-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountabilityProcessComponent {
  visible = true;

  constructor(private cdr: ChangeDetectorRef, private modalService: ModalServiceV2) {}

  visibilityChange(value: boolean): void {
    this.visible = value;
    this.cdr.detectChanges();
  }

  handleSeeProcessClick(): void {
    this.modalService.open(SeeProcessModalComponent);
  }
}
