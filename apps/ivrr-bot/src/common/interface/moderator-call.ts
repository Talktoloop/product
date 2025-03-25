import { CALL_TYPE } from '../constant/call-type';

export interface ModeratorCall {
  callSid: string;
  callDate: Date;
  userAnswered: boolean;
  callType: CALL_TYPE;
}
