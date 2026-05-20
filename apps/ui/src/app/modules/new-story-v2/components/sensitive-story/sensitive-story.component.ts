import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ModalServiceV2 } from '../../../../core/services/modal/modal-v2.service';
import { SensitiveStoryModalComponent } from '../../modals/sensitive-story-modal/sensitive-story-modal.component';

@Component({
  selector: 'app-sensitive-story',
  templateUrl: './sensitive-story.component.html',
  styleUrls: ['./sensitive-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensitiveStoryComponent {
  @Input() form: UntypedFormGroup;

  constructor(private modalService: ModalServiceV2) {}

  openModal(): void {
    this.modalService.open(SensitiveStoryModalComponent);
  }
}
