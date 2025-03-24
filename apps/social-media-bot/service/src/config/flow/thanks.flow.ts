import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const thanks: FlowRecordInterface = {
  flowId: Flow.THANKS,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: null,
    },
  ],
  nextFlowId: Flow.RESTART_FLOW,
};
