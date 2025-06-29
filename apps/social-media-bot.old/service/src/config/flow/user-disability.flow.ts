import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const userDisability: FlowRecordInterface = {
  flowId: Flow.USER_DISABILITY,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'USER_DISABILITY',
      fallbackFlow: Flow.THANKS,
      customHandler: 'userDisability',
      ignoreQuickReplyParsing: true,
    },
  ],
  nextFlowId: Flow.THANKS,
};
