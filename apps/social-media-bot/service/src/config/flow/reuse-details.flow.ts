import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const reuseDetails: FlowRecordInterface = {
  flowId: Flow.REUSE_DETAILS,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      contentSid: '', // TODO: Add contentSid
      contentVariables: {},
      translationHandler: 'userInfo',
    },
  ],
  nextFlowId: {
    YES: Flow.THANKS,
    NO: Flow.DONT_REUSE_DETAILS,
  },
};
