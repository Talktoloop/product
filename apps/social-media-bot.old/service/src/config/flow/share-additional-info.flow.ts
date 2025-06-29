import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const shareAdditionalInfo: FlowRecordInterface = {
  flowId: Flow.SHARE_ADDITIONAL_INFO,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'SHARE_ADDITIONAL_INFO',
      fallbackFlow: Flow.REUSE_DETAILS,
      customHandler: 'shareAdditionalInfo',
    },
  ],
  nextFlowId: Flow.REUSE_DETAILS,
};
