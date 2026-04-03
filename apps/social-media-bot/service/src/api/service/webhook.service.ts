import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommunicatorService } from '../../communicator/service/communicator.service';
import { FlowMessageType } from '../../common/enum/flow-message-type.enum';
import { FlowService } from '../../flow/flow.service';
import { StorageService } from '../../storage/storage.service';
import { setDelay } from '../../common/helper/set-delay';
import { IncomingMessage } from '../../common/type/incoming-message.type';

@Injectable()
export class WebhookService {
  private readonly logger: Logger = new Logger(WebhookService.name);

  constructor(
    private readonly flowManagerService: FlowService,
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
    private readonly communicatorService: CommunicatorService,
  ) {}

  async handleWebhook(data: IncomingMessage): Promise<void> {
    const pageConfig = await this.communicatorService.getPageConfig(data);
    const pageIdForLog =
      data && typeof data === 'object' && 'pageId' in data
        ? String((data as { pageId: string }).pageId)
        : 'n/a';
    this.logger.log(
      `handleWebhook: pageConfig=${pageConfig ? 'found' : 'MISSING'} pageId=${pageIdForLog}`,
    );

    const pageId = this.communicatorService.getPageId(data, pageConfig);
    const receivedMessages = await this.communicatorService.extractMessages(data, pageId);
    const senderId = this.communicatorService.getSenderId(data, receivedMessages);

    if (!pageConfig || !senderId || !receivedMessages) {
      this.logger.warn(
        `handleWebhook skipped: ${JSON.stringify({
          hasPageConfig: !!pageConfig,
          hasSenderId: !!senderId,
          hasReceivedMessages: !!receivedMessages,
          pageId: pageIdForLog,
        })}`,
      );
      return;
    }

    this.logger.debug(
      `[pipeline:webhook] resolved senderId=${senderId} pageId=${pageId} inboundPreview=${String(receivedMessages).slice(0, 80)} hasAttachment=${this.communicatorService.checkIfMessageHaveAttachment(data, receivedMessages)}`,
    );

    await this.communicatorService.markSeenChat(senderId, pageId);
    this.logger.debug('[pipeline:webhook] markSeenChat done');

    const profile = await this.communicatorService.getUserProfile(
      pageConfig.pageId,
      senderId,
      data,
    );
    this.logger.debug(`[pipeline:webhook] getUserProfile done profileKeys=${Object.keys(profile || {}).join(',')}`);

    const messagesToSend = await this.flowManagerService.handleMessage(
      senderId,
      profile,
      receivedMessages,
      pageConfig,
      this.communicatorService.checkIfMessageHaveAttachment(data, receivedMessages),
    );
    this.logger.debug(
      `[pipeline:webhook] handleMessage returned count=${messagesToSend?.length ?? 0} finishFlow=${messagesToSend?.some((m) => m.finishFlow === true) ?? false}`,
    );

    for (let i = 0; i < messagesToSend.length; i++) {
      const message = messagesToSend[i];
      this.logger.debug(
        `[pipeline:webhook] outbound send ${i + 1}/${messagesToSend.length} flowId=${message?.flowId} hasText=${!!message?.message?.text}`,
      );
      await this.communicatorService.sendMessage(message, pageId);

      if (message?.message?.text) {
        await this.storageService.addFlowMessage({
          userId: senderId,
          pageId: pageConfig.pageId,
          content: message.message.text,
          type: FlowMessageType.SEND,
        });
      }

      await setDelay(1000);
    }

    if (messagesToSend?.some((m) =>
      m.finishFlow === true)) {
      const supportedLanguages = pageConfig.supportedLanguages.map((language) => language?.lang);

      this.logger.debug(
        `[pipeline:webhook] finishFlow: setShareUserInfoAndSaveStory languages=${supportedLanguages.join(',')}`,
      );
      await this.flowManagerService.setShareUserInfoAndSaveStory(
        supportedLanguages, {
        senderId: senderId,
        pageId: pageConfig.pageId,
      });

      await this.storageService.purgeCurrentMessageFlowData(senderId, pageConfig.pageId);
      this.logger.debug('[pipeline:webhook] purgeCurrentMessageFlowData done (finishFlow branch)');
    }

    this.logger.debug('[pipeline:webhook] handleWebhook complete');
  }
}
