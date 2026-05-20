import { MessageType } from '../enum/message-type.enum';
import { Flow } from '../enum/flow.enum';
import { Provider } from '../enum/provider.enum';

export interface Option {
  translationId: string;
  answerId: string;
}

export interface FlowRecordInterface {
  flowId: Flow;
  nextFlowId: unknown;
  flowMessages?: Array<FlowMessageInterface>;
}

export const EMPTY_FLOW: FlowRecordInterface = {
  flowId: null,
  flowMessages: [],
  nextFlowId: null,
};

export interface FlowMessageInterface {
  type: MessageType;
  translationId?: string;
  contentSid?: string;
  contentVariables?: Record<string, string>;
  contentVariableName?: string;
  options?: Array<Option>;
  customHandler?: string;
  ignoreQuickReplyParsing?: boolean;
  attachment?: boolean;
  allowCustomResponse?: boolean;
  fallbackFlow?: Flow;
  translationHandler?: string;
  finishFlow?: boolean;
  lang?: string;
  excludedProviders?: Provider[];
  optionsAsTextMessage?: boolean;
}
