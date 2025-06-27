import { DatePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { genericRetryStrategy } from '@app/core/services/api/generic-retry-strategy';
import { CommunicatorService } from '@app/core/services/api/messaging/communicator/communicator.service';
import { MessagingServiceInterface } from '@app/core/services/api/messaging/messaging.interface';
import { SMSService } from '@app/core/services/api/messaging/sms/sms.service';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IConversationAvailable } from '@app/core/services/api/model/response/is-phone-available.model';
import { ISMSMessage, ISMSSender, SENDER_TYPE } from '@app/core/services/api/model/story-sms-message.model';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { StoryDetailsService } from '@app/modules/inbox/stories/story-details/story-details.service';
import { fadeAnimation } from '@app/shared/animations/fade.animation';
import { BaseComponent } from '@app/shared/components/base.component';
import { TextareaComponent } from '@app/shared/components/textarea/textarea.component';
import { TranslateService } from '@ngx-translate/core';
import { ReviewOnScroll } from '@shared/decorators/review-onscroll';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { delay, repeat, retryWhen, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  animations: [fadeAnimation],
})
export class ConversationComponent extends BaseComponent implements OnInit, OnDestroy, OnChanges {
  readonly maxSmsReplyLength = 320;
  readonly phoneAvailabilityInterval = 3000;
  readonly dateFormat = 'd MMM y';

  @Input() contactAccepted: boolean;
  @Input() id: string;
  @Input() storyMessages: ISMSMessage[];
  @Input() channel: CHANNEL_CONSTANTS;
  @Output() conversationScrolled = new EventEmitter<any>();

  @Output() switchPinMessageToStory$ = new EventEmitter<string>();
  @ViewChild('conversationWrapper') conversationWrapper: ElementRef;
  @ViewChild(TextareaComponent) replyTextArea: TextareaComponent;

  conversationService: MessagingServiceInterface;
  messages: { [key: string]: ISMSMessage[] };
  replyContent = '';
  replySection: { blocked: boolean; message?: string };
  scrolledToBottom = false;
  SENDER_TYPE = SENDER_TYPE;
  sendingReply = false;
  today: string;

  private availabilityStatusRepeat$ = new Subject();

  constructor(
    private cd: ChangeDetectorRef,
    private dp: DatePipe,
    private injector: Injector,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private translateService: TranslateService,
    public storyDetailsService: StoryDetailsService,
  ) {
    super();
  }

  conversationServiceFactory(injector: Injector, channel: CHANNEL_CONSTANTS): MessagingServiceInterface {
    switch (channel) {
      case CHANNEL_CONSTANTS.SMS:
        return injector.get<SMSService>(SMSService);
      case CHANNEL_CONSTANTS.MESSENGER:
      case CHANNEL_CONSTANTS.WHATSAPP:
      case CHANNEL_CONSTANTS.TELEGRAM:
        return injector.get<CommunicatorService>(CommunicatorService);
      default:
        break;
    }
  }

  @ReviewOnScroll(false)
  onScroll(event): void {
    this.conversationScrolled.emit(event);
  }

  ngOnInit(): void {
    if (!this.channel) {
      this.channel = this.route.snapshot.paramMap.get('channel') as CHANNEL_CONSTANTS;
    }

    this.conversationService = this.conversationServiceFactory(this.injector, this.channel);

    this.messages = this.mapMessagesByDate(this.storyMessages);

    if (this.conversationService) {
      this.conversationService
        .isConversationAvailable(this.id, this.channel)
        .pipe(delay(this.phoneAvailabilityInterval), repeat(), retryWhen(genericRetryStrategy()), takeUntil(this.availabilityStatusRepeat$))
        .subscribe((response) => {
          const blocked = response.type !== null || this.contactAccepted === false;
          this.replySection = {
            blocked,
            message: blocked ? this.getReplyErrorMessage(response) : '',
          };
          if (!this.contactAccepted) {
            this.availabilityStatusRepeat$.next(null);
            this.availabilityStatusRepeat$.complete();
          }
          this.cd.markForCheck();
        });
    }
  }

  private getReplyErrorMessage(userAvailability: IConversationAvailable): string {
    const userDenied = this.translateService.instant('admin.conversationReply.unavailable.userDenied');
    const threadLink = `<a class="story-link" href="${this.getStoryUrl(userAvailability.storyId)}">${this.translateService.instant(
      'admin.conversationReply.unavailable.threadOpen.link',
    )}</a>`;
    const threadOpen = `${this.translateService.instant('admin.conversationReply.unavailable.threadOpen.content')} ${threadLink}.`;
    const cannotSend = this.translateService.instant('admin.conversationReply.unavailable.cannotSend');
    return this.contactAccepted === false
      ? userDenied
      : userAvailability.type !== null
      ? userAvailability.storyId
        ? threadOpen
        : cannotSend
      : null;
  }

  getStoryUrl(storyId: string): string {
    const step = 'review';

    return `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.STORIES}/story/:channel/:id/${step}}`
      .replace(':channel', this.channel)
      .replace(':id', storyId);
  }

  mapMessagesByDate(messages: ISMSMessage[]): { [key: string]: ISMSMessage[] } {
    const mapped = {};
    this.today = this.dp.transform(new Date().getTime(), this.dateFormat);
    messages?.forEach((message) => {
      const date = this.dp.transform(message.createdAt, this.dateFormat);
      if (!Array.isArray(mapped[date])) {
        mapped[date] = [];
      }
      const messageCopy = {
        ...message,
      };

      messageCopy.sender.username =
        messageCopy.sender.type === SENDER_TYPE.LOOP
          ? this.translateService.instant('admin.conversationReply.author.loop')
          : messageCopy.sender.username;
      mapped[date] = [...mapped[date], messageCopy];
    });

    if (!Array.isArray(mapped[this.today])) {
      mapped[this.today] = [];
    }

    return mapped;
  }

  getDisplayDate(date: string): string {
    return date === this.today ? this.translateService.instant('global.today') : date;
  }

  getDisplayUsername(sender: ISMSSender): string {
    const anonymousSender = this.translateService.instant('admin.conversationReply.author.anonymous');
    let senderUsername = null;

    if (sender.type === SENDER_TYPE.ISSUER) {
      senderUsername = sender.username === null ? anonymousSender : sender.username;
    }

    return sender.username === this.profileService.userProfile.nickname ? this.translateService.instant('global.you') : senderUsername;
  }

  replyClicked(): void {
    if (!this.scrolledToBottom) {
      this.conversationWrapper.nativeElement.scrollTop = this.conversationWrapper.nativeElement.scrollHeight - 1;
    }
    this.sendingReply = true;

    const createdMessage = {
      id: this.storyMessages[this.storyMessages.length - 1].id.valueOf() + 1,
      storyId: null,
      content: this.replyContent,
      sender: {
        id: this.profileService.userProfile.id,
        username: this.profileService.userProfile.nickname,
        type: SENDER_TYPE.MODERATOR,
      },
      createdAt: new Date().toISOString(),
      sending: true,
    } as ISMSMessage;

    this.messages[this.today].push(createdMessage);

    const errorFn = () => {
      this.messages[this.today].pop();
      this.toastr.error(
        this.translateService.instant(`admin.conversationReply.toast.send.error.title`),
        this.translateService.instant(`admin.conversationReply.toast.send.error.subtitle`),
      );
      this.sendingReply = false;
    };

    this.conversationService
      .sendMessage(
        {
          introduction: this.translateService.instant(`admin.conversationReply.intro.${this.channel}`),
          storyId: this.id,
          content: this.replyContent,
        },
        this.channel,
      )
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        (r) => {
          if (!r.success) {
            errorFn();
          } else {
            this.replyContent = null;
            this.replyTextArea.value = '';
            this.sendingReply = false;
            createdMessage.sending = false;
            this.cd.markForCheck();
          }
        },
        (e) => {
          errorFn();
        },
      );
  }

  replyContentChanged(text: string): void {
    this.replyContent = text;
  }

  getBubbleClass(message: ISMSMessage): { [key: string]: boolean } {
    return {
      'bubble__content--left': message.sender.type === SENDER_TYPE.ISSUER,
      'bubble__content--right': message.sender.type !== SENDER_TYPE.ISSUER,
      'bubble__content--you': message.sender.type !== SENDER_TYPE.ISSUER && !message.sending,
      'bubble__content--main': !!message.storyId,
    };
  }

  pinToStory(message: ISMSMessage): void {
    this.switchPinMessageToStory$.emit(message.id);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.availabilityStatusRepeat$.next(null);
    this.availabilityStatusRepeat$.complete();
  }

  ngOnChanges(): void {
    this.messages = this.mapMessagesByDate(this.storyMessages);
  }

  getTrackBy(message: ISMSMessage) {
    return message.id;
  }
}
