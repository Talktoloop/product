import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { dontReuseDetails } from './dont-reuse-details.flow';
import { MessageType } from '../../common/enum/message-type.enum';

export const dontReuseDetailsFallback: FlowRecordInterface = {
  flowId: Flow.DONT_REUSE_DETAILS_FALLBACK,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'INVALID_OPTION',
    },
    dontReuseDetails.flowMessages[0],
  ],
  nextFlowId: dontReuseDetails.nextFlowId,
};
