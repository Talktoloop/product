import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const userGender: FlowRecordInterface = {
  flowId: Flow.USER_GENDER,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'USER_GENDER',
      fallbackFlow: Flow.USER_DISABILITY,
      customHandler: 'userGender',
      ignoreQuickReplyParsing: true,
    },
  ],
  nextFlowId: Flow.USER_DISABILITY,
};
