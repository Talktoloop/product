import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';
import { RequiredTagState } from '@app/shared/loop-design-system/components/tags/required-tag-state.enum';
import { SimpleTagTheme } from '@app/shared/loop-design-system/components/tags/simple-tag-theme.enum';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
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
  @ViewChild('modalActionButtons') modalActionButton: TemplateRef<any>;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @Input() dropdownWidth: number | 'auto' = 200;
  @Input() heading: string;
  @Input() isValid: boolean;
  @Input() onlyContent = false;
  @Input() required: boolean;
  @Input() requiredValidationError = false;
  @Input() selectedItems: Pill[];
  @Input() singleValue: boolean;
  @Input() fabButtonSize: 'small' | 'medium' | 'big' = 'small';
  @Input() isStaticDropdown = false;
  @Output() apply = new EventEmitter<boolean>();
  @Output() dismiss = new EventEmitter<string | number>();
  @Output() outsideClicked = new EventEmitter<boolean>();

  isEditing = false;
  modal: ModalV2Component;
  organisation: string;
  SimpleTagTheme = SimpleTagTheme;
  TagSize = TagSize;

  constructor(public ui: UIService, private modalService: ModalServiceV2, private translate: TranslateService) {
    super();
  }

  get isRequiredValid(): boolean {
    return this.required && this.isValid;
  }

  get requiredTagState(): RequiredTagState {
    if (this.isRequiredValid) {
      return RequiredTagState.SUCCESS;
    } else if (!this.isRequiredValid && !this.requiredValidationError) {
      return RequiredTagState.NEUTRAL;
    } else {
      return RequiredTagState.ERROR;
    }
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
