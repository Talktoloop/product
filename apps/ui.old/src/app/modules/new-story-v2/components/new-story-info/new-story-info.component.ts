import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
import { StoryCategory } from '@app/shared/types/story-category.type';
import { BaseComponent } from '@shared/components/base.component';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-new-story-info',
  templateUrl: './new-story-info.component.html',
  styleUrls: ['./new-story-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewStoryInfoComponent extends BaseComponent {
  @Input() set form(form: UntypedFormGroup) {
    this._form = form;
    this._form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((val) => this.cd.detectChanges());
  }

  get form(): UntypedFormGroup {
    return this._form;
  }

  @Input() isReview: boolean;
  @Input() regionId: number;
  @Input() countryCode: string;
  @Input() submitting: boolean;
  @Output() submitStory = new EventEmitter<void>();
  @Output() stepChange = new EventEmitter<number>();

  _form: UntypedFormGroup;
  organisations: IBaseEntityN[];
  consentFormControl = new UntypedFormControl(false, [Validators.requiredTrue]);
  StoryCategory = StoryCategory;
  TagSize = TagSize;

  constructor(private cd: ChangeDetectorRef, private metadataService: MetaDataService) {
    super();
    this.metadataService.organisations$.pipe(takeUntil(this.destroyed$), debounceTime(300)).subscribe((organisations) => {
      this.organisations = organisations;
      this.cd.detectChanges();
    });
  }

  get step1Form(): UntypedFormGroup {
    return this.form.get('step1') as UntypedFormGroup;
  }

  get step2Form(): UntypedFormGroup {
    return this.form.get('step2') as UntypedFormGroup;
  }

  get step3Form(): UntypedFormGroup {
    return this.form.get('step3') as UntypedFormGroup;
  }

  get categoriesFormArray(): UntypedFormArray {
    return this.step1Form?.get('categories') as UntypedFormArray;
  }

  get isSensitiveStory(): boolean {
    return this.step1Form?.get('isSensitive')?.value;
  }

  get storyText(): string {
    return this.step1Form?.get('content')?.value;
  }

  get organisaztions(): string[] {
    return this.step2Form?.get('organisations')?.value || [];
  }

  get storyBy(): string {
    return this.step3Form?.get('authorNickname')?.value;
  }

  getOrganisation(id: string): string {
    const organisationCandidate = this.organisations?.find((o) => o.id === id);

    return organisationCandidate ? organisationCandidate.name : id;
  }

  onEditStoryClick(): void {
    this.stepChange.emit(0);
  }

  handleSubmitButtonClick(): void {
    if (!this.consentFormControl.value) {
      this.consentFormControl.markAsTouched();
      return;
    }
    this.submitStory.emit();
  }
}
