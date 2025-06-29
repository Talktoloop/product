import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const reuseDetails: FlowRecordInterface = {
  flowId: Flow.REUSE_DETAILS,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'REUSE_DETAILS',
      translationHandler: 'userInfo',
    },
    {
      type: MessageType.QUICK_REPLIES,
      translationId: 'REUSE_DETAILS_BUTTONS',
      fallbackFlow: Flow.REUSE_DETAILS_FALLBACK,
      options: ['YES', 'NO'].map((type) => ({
        translationId: type,
        answerId: type,
      })),
    },
  ],
  nextFlowId: {
    YES: Flow.THANKS,
    NO: Flow.DONT_REUSE_DETAILS,
  },
};
