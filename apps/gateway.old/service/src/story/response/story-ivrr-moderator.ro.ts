import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { CallRO } from '../../ivrr/response/call.ro';

import { StoryWebModeratorRO } from './story-web-moderator.ro';
import { OtherStoriesBySameRecipientRO } from '../../ivrr/response/other-stories.ro';

@Exclude()
export class StoryIvrrModeratorRO extends StoryWebModeratorRO {
  @Expose()
  @ApiProperty({ type: CallRO })
  calls: CallRO[];


  @Expose()
  @ApiProperty({ type: OtherStoriesBySameRecipientRO })
  otherStoriesSameRecipient: OtherStoriesBySameRecipientRO[];
}
