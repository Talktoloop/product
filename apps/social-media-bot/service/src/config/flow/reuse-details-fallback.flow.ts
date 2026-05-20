import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';
import { reuseDetails } from './reuse-details.flow';

export const reuseDetailsFallback: FlowRecordInterface = {
  flowId: Flow.REUSE_DETAILS_FALLBACK,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'INVALID_OPTION',
    },
    ...reuseDetails.flowMessages,
  ],
  nextFlowId: reuseDetails.nextFlowId,
};
