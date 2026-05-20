import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { LANGUAGE } from '@ourloop/shared';
import { MessageType } from '../../common/enum/message-type.enum';
import { TwilioLocalizedTemplates, getLocalizedTemplate } from '../../common/constant/twilio-templates';
import { TwilioTemplateKey } from '../../common/enum/twilio-template-key.enum';

export const createMoreOptionsFlow = async (
  supportedLanguages: string[],
  languageCode: string,
): Promise<FlowRecordInterface> => {

  return {
    flowId: Flow.MORE_OPTIONS,
    nextFlowId: Flow.SHARE_ANONYMOUS,
    flowMessages: [
      {
        type: MessageType.MESSAGE,
        contentSid: getLocalizedTemplate(languageCode as keyof typeof TwilioLocalizedTemplates, TwilioTemplateKey.MORE_OPTIONS),
        translationId: TwilioTemplateKey.MORE_OPTIONS,
        lang:
          supportedLanguages.find((value) => value === languageCode) ??
          LANGUAGE.ENGLISH,
        customHandler: 'changeLang',
        fallbackFlow: Flow.LANG_NOT_VALID,
      },
    ],
  };
};

