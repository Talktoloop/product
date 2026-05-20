import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const serviceUnavailableStory: FlowRecordInterface = {
  flowId: Flow.SERVICE_UNAVAILABLE,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'SERVICE_UNAVAILABLE',
    },
  ],
  nextFlowId: Flow.RESTART_FLOW,
};
