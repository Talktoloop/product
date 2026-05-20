import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { LANGUAGE } from '@ourloop/shared';
import { MessageType } from '../../common/enum/message-type.enum';
import { Provider } from '../../common/enum/provider.enum';
import { TwilioLocalizedTemplates, getLocalizedTemplate } from '../../common/constant/twilio-templates';
import { TwilioTemplateKey } from '../../common/enum/twilio-template-key.enum';

export const createChangLangFlow = async (
  supportedLanguages: string[],
  languageCode: string,
): Promise<FlowRecordInterface> => {

  return {
    flowId: Flow.CHANGE_LANG,
    nextFlowId: Flow.SHARE_ANONYMOUS,
    flowMessages: [
      {
        type: MessageType.MESSAGE,
        translationId: 'GREETINGS',
        excludedProviders: [Provider.FACEBOOK],
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
  };
};
