import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const userAge: FlowRecordInterface = {
  flowId: Flow.USER_AGE,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'USER_AGE',
      fallbackFlow: Flow.USER_GENDER,
      customHandler: 'userAge',
      ignoreQuickReplyParsing: true,
    },
  ],
  nextFlowId: Flow.USER_GENDER,
};
