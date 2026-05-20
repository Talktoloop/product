import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const userName: FlowRecordInterface = {
  flowId: Flow.USER_NAME,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'USER_NAME',
      fallbackFlow: Flow.USER_AGE,
      customHandler: 'userName',
      ignoreQuickReplyParsing: true,
    },
  ],
  nextFlowId: Flow.USER_AGE,
};
