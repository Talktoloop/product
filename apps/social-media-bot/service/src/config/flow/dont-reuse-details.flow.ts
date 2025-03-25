import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const dontReuseDetails: FlowRecordInterface = {
  flowId: Flow.DONT_REUSE_DETAILS,
  flowMessages: [
    {
      type: MessageType.QUICK_REPLIES,
      translationId: 'DONT_REUSE_DETAILS',
      customHandler: 'keepAnonymous',
      fallbackFlow: Flow.DONT_REUSE_DETAILS_FALLBACK,
      options: ['YES', 'NO'].map((type) => ({
        translationId: type,
        answerId: type,
      })),
      optionsAsTextMessage: true,
    },
  ],
  nextFlowId: {
    YES: Flow.USER_NAME,
    NO: Flow.KEEP_ANONYMOUS,
  },
};
