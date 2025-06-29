import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';
import { LANGUAGE } from '@ourloop/shared';
import configuration from '../../config/default';

export const createChooseLangFallbackFlow = async (
  supportedLanguages: string[],
  languageCode: string,
): Promise<FlowRecordInterface> => {
  const config = await configuration();
  const supportedQuickReplies = config.application.supportedQuickReplies;

  return {
    flowId: Flow.LANG_NOT_VALID,
    flowMessages: [
      {
        type: MessageType.MESSAGE,
        translationId: 'INVALID_OPTION',
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
    nextFlowId: Flow.SHARE_STORY,
  };
};
