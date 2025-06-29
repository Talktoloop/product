import { FlowRecordInterface } from '../../common/interface/flow-record';
import { Flow } from '../../common/enum/flow.enum';
import { MessageType } from '../../common/enum/message-type.enum';

export const shareStory: FlowRecordInterface = {
  flowId: Flow.SHARE_STORY,
  flowMessages: [
    {
      type: MessageType.MESSAGE,
      translationId: 'IF_SENSITIVE_STORY',
      translationHandler: 'userInfo',
    },
    {
      type: MessageType.MESSAGE,
      translationId: 'TALK_TO_LOOP',
      customHandler: 'shareStory',
    },
  ],
  nextFlowId: Flow.SHARE_ADDITIONAL_INFO,
};
