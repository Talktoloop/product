import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { keepAnonymous } from './keep-anonymous.flow';
import { MessageType } from '../../common/enum/message-type.enum';

export const keepAnonymousFallback: FlowRecordInterface = {
  flowId: Flow.KEEP_ANONYMOUS_FALLBACK,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'INVALID_OPTION',
    },
    keepAnonymous.flowMessages[0],
  ],
  nextFlowId: keepAnonymous.nextFlowId,
};
