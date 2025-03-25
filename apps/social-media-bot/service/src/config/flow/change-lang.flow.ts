import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { LANGUAGE } from '@ourloop/shared';
import { MessageType } from '../../common/enum/message-type.enum';
import { Provider } from '../../common/enum/provider.enum';
import configuration from '../../config/default';

export const createChangLangFlow = async (
  supportedLanguages: string[],
  languageCode: string,
): Promise<FlowRecordInterface> => {
  const config = await configuration();
  const supportedQuickReplies = config.application.supportedQuickReplies;

  return {
    flowId: Flow.CHANGE_LANG,
    nextFlowId: Flow.SHARE_STORY,
    flowMessages: [
      {
        type: MessageType.MESSAGE,
        translationId: 'GREETINGS',
        excludedProviders: [Provider.FACEBOOK],
      },
      {
        type: MessageType.QUICK_REPLIES,
        translationId: 'CHOOSE_LANG',
        lang:
          supportedLanguages.find((value) => value === languageCode) ??
          LANGUAGE.ENGLISH,
        options: supportedLanguages.map((lang, index) => ({
          translationId: String(lang).toUpperCase(),
          answerId: supportedQuickReplies ? lang : (index + 1).toString(),
        })),
        optionsAsTextMessage: true,
        customHandler: 'changeLang',
        fallbackFlow: Flow.LANG_NOT_VALID,
      },
    ],
  };
};
