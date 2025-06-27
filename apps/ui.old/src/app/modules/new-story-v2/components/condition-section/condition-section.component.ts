import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntity } from '@app/core/services/api/model/response/base-entity.model';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { BaseComponent } from '@shared/components/base.component';
import { takeUntil } from 'rxjs/operators';
import { DifficultyEnum } from '../../../../core/services/api/model/difficulty.enum';
import { ConditionHelpMeModalComponent } from '../../modals/condition-help-me-modal/condition-help-me-modal.component';
import { ConditionModalComponent } from '../../modals/condition-modal/condition-modal.component';

@Component({
  selector: 'loop-condition-section',
  templateUrl: './condition-section.component.html',
  styleUrls: ['./condition-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionSectionComponent extends BaseComponent implements OnInit {
  @Input() form: UntypedFormGroup;
  @Input() isSensitiveStory: boolean;
  difficulties: IBaseEntity[];
  formControl = new UntypedFormControl(null);

  get isCondition(): boolean {
    return this.formControl.value === true;
  }

  constructor(private metadataService: MetaDataService, private modalService: ModalServiceV2) {
    super();
  }

  ngOnInit(): void {
    this.metadataService.difficulties$.pipe(takeUntil(this.destroyed$)).subscribe((d) => (this.difficulties = d));

    this.formControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((val) => {
      !val && this.form.get('difficulties').setValue([]);
      this.form.get('difficulty').setValue(this.getDifficultyControlValue(val));
    });
  }

  onWhyModalOpen(): void {
    this.modalService.open(ConditionModalComponent);
  }

  onHelpModalOpen(): void {
    this.modalService.open(ConditionHelpMeModalComponent);
  }

  private getDifficultyControlValue(value: true | false | 0): DifficultyEnum {
    if (value) {
      return DifficultyEnum.YES;
    } else if (value === 0) {
      return DifficultyEnum.NO_ANSWER;
    } else {
      return DifficultyEnum.NO;
    }
  }
}
