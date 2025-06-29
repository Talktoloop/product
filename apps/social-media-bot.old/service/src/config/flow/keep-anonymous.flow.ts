import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';
import { thanks } from './thanks.flow';

export const keepAnonymous: FlowRecordInterface = {
  flowId: Flow.KEEP_ANONYMOUS,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'KEEP_ANONYMOUS',
    },
    ...thanks.flowMessages,
  ],
  nextFlowId: thanks.nextFlowId,
};
