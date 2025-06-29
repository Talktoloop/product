import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';
import { LANGUAGE } from '@ourloop/shared';
import { TwilioLocalizedTemplates, getLocalizedTemplate } from '../../common/constant/twilio-templates';
import { TwilioTemplateKey } from '../../common/enum/twilio-template-key.enum';

export const createChooseLangFallbackFlow = async (
  supportedLanguages: string[],
  languageCode: string,
): Promise<FlowRecordInterface> => {

  return {
    flowId: Flow.LANG_NOT_VALID,
    flowMessages: [
      {
        type: MessageType.MESSAGE,
        translationId: 'INVALID_OPTION',
      },
      {
        type: MessageType.MESSAGE,
        contentSid: getLocalizedTemplate(languageCode as keyof typeof TwilioLocalizedTemplates, TwilioTemplateKey.CHOOSE_LANG),
        translationId: TwilioTemplateKey.CHOOSE_LANG,
        lang:
          supportedLanguages.find((value) => value === languageCode) ??
          LANGUAGE.ENGLISH,
        customHandler: 'changeLang',
        fallbackFlow: Flow.LANG_NOT_VALID,
      },
    ],
    nextFlowId: Flow.SHARE_ANONYMOUS,
  };
};
