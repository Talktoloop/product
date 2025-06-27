import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IStory } from '@app/core/services/api/model/story.model';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IUserProfileAPI } from '@core/services/api/model/response/user-profile.model';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { AuthService } from '@core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { FocusInvalidService } from '@shared/directives/invalid-focusable/focus-invalid.service';
import { FormHelperService } from '@shared/services/form-helper.service';
import { forceNavigate, prepareGuardRoute } from '@shared/utils/prepare-guard-route';
import { ToastrService } from 'ngx-toastr';
import { take, takeUntil } from 'rxjs/operators';
import { ICommentID } from './model/comment-id.model';
import { PosthogService } from '@app/shared/services/posthog.service';
import { POSTHOG_EVENTS } from '@app/shared/enums/posthog-event.enum';

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.scss'],
})
export class ReplyFormComponent extends BaseComponent implements OnInit, OnChanges, OnDestroy {
  readonly minContentChars = 5;
  @Input() formType: 'story' | 'comment' = 'story';
  @Input() commentId: ICommentID;
  @Input() skeleton = false;
  @Input() focus: boolean;
  @Input() story: IStory;
  fieldsTouched: Array<string> = [];
  CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;
  smsReplyCharactersLimit = 320;
  otherReplyCharactersLimit = 30000;

  @ViewChild('contentTextarea') contentTextAreaRef: ElementRef;

  submitted = false;
  replyForm: UntypedFormGroup = new UntypedFormGroup({
    content: new UntypedFormControl('', [
      Validators.maxLength(this.otherReplyCharactersLimit),
      Validators.minLength(this.minContentChars),
      Validators.required,
    ]),
    email: new UntypedFormControl('', [Validators.email]),
    nickname: new UntypedFormControl(''),
    termsAgree: new UntypedFormControl(false, [Validators.requiredTrue]),
  });
  userProfile: IUserProfileAPI;
  successMessageShown: boolean;

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private commentService: CommentService,
    private focusInvalidService: FocusInvalidService,
    private formHelper: FormHelperService,
    private profileService: ProfileService,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private posthogService: PosthogService
  ) {
    super();
    this.userProfile = this.profileService.userProfile;
  }

  ngOnInit(): void {
    this.termsAgree.patchValue(!!this.userProfile);
  }

  ngOnChanges(): void {
    if (this.commentId) {
      this.replyForm.addControl('id', new UntypedFormControl(this.commentId.id));
    }
    if (this.commentId?.parentCommentId) {
      this.replyForm.addControl('parentCommentId', new UntypedFormControl(this.commentId.parentCommentId));
    }
  }

  get content(): AbstractControl {
    return this.replyForm.get('content');
  }

  get email(): AbstractControl {
    return this.replyForm.get('email');
  }

  get termsAgree(): AbstractControl {
    return this.replyForm.get('termsAgree');
  }

  shouldShowValidation(name: string): boolean {
    return this.replyForm.get(name).invalid && (this.submitted || this.focusedOut(name));
  }

  focusedOut(name: string): boolean {
    return this.fieldsTouched.indexOf(name) >= 0;
  }

  validate(name: string): void {
    this.fieldsTouched.push(name);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  resetForm(): void {
    this.replyForm.reset();
    this.replyForm.get('id')?.setValue(this.commentId.id);
    this.replyForm.get('parentCommentId')?.setValue(this.commentId.parentCommentId);
    this.replyForm.markAsPristine();
    this.replyForm.markAsUntouched();
    this.replyForm.get('termsAgree').setValue(!!this.userProfile);
    this.submitted = false;
    this.fieldsTouched = new Array<string>();
    this.cd.markForCheck();
  }

  onSuccess(): void {
    // TODO
  }

  unblockForm(): void {
    this.submitted = false;
    this.cd.markForCheck();
  }

  submitComment(): void {
    this.replyForm.markAllAsTouched();
    this.formHelper.markAllAsDirty(this.replyForm);
    if (this.replyForm.invalid) {
      this.focusInvalidService.focusFirstInvalidFocusableElement();
      return;
    }
    if (this.replyForm.valid && !this.submitted) {
      this.submitted = true;
      const payload = { ...this.replyForm.value, id: undefined, termsAgree: undefined };
      if (this.userProfile?.nickname && this.userProfile?.email) {
        payload.nickname = undefined;
        payload.email = undefined;
      }
      Object.keys(payload).forEach((key) => {
        payload[key] = payload[key] ? payload[key] : undefined;
      });
      this.commentService
        .addComment(this.replyForm.value.id, payload)
        .pipe(take(1), takeUntil(this.destroyed$))
        .subscribe(
          (res) => {
            if (res.success) {
              this.resetForm();
              this.successMessageShown = true;
              this.posthogService.trackEvent(POSTHOG_EVENTS.SUBMIT_REPLY, { case: this.replyForm.value.id, user: this.userProfile.id })
            } else {
              this.toastr.error(
                this.translateService.instant('story.replyForm.toast.error.title'),
                this.translateService.instant('story.replyForm.toast.error.subtitle'),
              );
              this.unblockForm();
            }
          },
          () => {
            this.toastr.error(
              this.translateService.instant('story.replyForm.toast.error.title'),
              this.translateService.instant('story.replyForm.toast.error.subtitle'),
            );
            this.unblockForm();
          },
        );
    }
  }

  logout(): void {
    this.authService.logout();
    this.toastr.success(this.translateService.instant('auth.logout.toast.success.subtitle'));
    this.replyForm.get('termsAgree').setValue(false);
    this.userProfile = null;
    forceNavigate(
      this.router,
      prepareGuardRoute(this.router.url),
      prepareGuardRoute(`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`),
    );
    this.cd.markForCheck();
  }
}
