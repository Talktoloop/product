import { CallRO } from '../../ivrr/response/call.ro';
import { StoryWebModeratorRO } from './story-web-moderator.ro';
import { OtherStoriesBySameRecipientRO } from '../../ivrr/response/other-stories.ro';
export declare class StoryIvrrModeratorRO extends StoryWebModeratorRO {
    calls: CallRO[];
    otherStoriesSameRecipient: OtherStoriesBySameRecipientRO[];
}
