import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { ModalV2Component } from '@shared/components/modal-v2/modal-v2.component';

export interface Pill {
  id: string | number;
  content: string;
}

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSectionComponent extends BaseComponent {
  @ViewChild('fabWrapper') fabWrapper: ElementRef;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('modalActionButtons') modalActionButton: TemplateRef<any>;
  @Input() heading: string;
  @Input() selectedItems: Pill[];
  @Input() onlyContent = false;
  @Input() required: boolean;
  @Input() dropdownWidth: number | 'auto' = 200;
  @Input() singleValue: boolean;
  @Output() dismiss = new EventEmitter<string | number>();
  @Output() apply = new EventEmitter<boolean>();
  @Output() outsideClicked = new EventEmitter<boolean>();
  isEditing = false;
  modal: ModalV2Component;

  constructor(public ui: UIService, private modalService: ModalServiceV2, private translate: TranslateService) {
    super();
  }

  handleDismiss(id: string | number): void {
    this.dismiss.emit(id);
  }

  handleFabOutsideClick(): void {
    this.isEditing = false;
    this.outsideClicked.emit(true);
  }

  handleFabClick(): void {
    this.isEditing = !this.isEditing;
    if (this.ui.mobileView) {
      this.modal = this.modalService.openWithTemplate([this.modalContent, this.modalActionButton]);
      this.modal.title = this.translate.instant(this.heading);
    }
  }

  trackFn(index, item: Pill): string | number {
    return item.id;
  }

  onCancelClick(): void {
    this.isEditing = false;
    this.closeModal();
  }

  onApplyClick(): void {
    this.isEditing = false;
    this.closeModal();
    this.apply.emit(true);
  }

  private closeModal(): void {
    if (!this.modal) {
      return;
    }
    this.modal.close();
    this.modal = null;
  }
}
