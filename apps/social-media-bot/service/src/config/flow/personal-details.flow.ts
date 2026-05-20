import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';
import { userName } from './user-name.flow';

export const personalDetails: FlowRecordInterface = {
  flowId: Flow.PERSONAL_DETAILS,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'PERSONAL_DETAILS',
    },
    userName.flowMessages[0],
  ],
  nextFlowId: Flow.USER_AGE,
};
