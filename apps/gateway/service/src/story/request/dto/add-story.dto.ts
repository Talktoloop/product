import { ApiProperty } from '@nestjs/swagger';
import { CHANNEL_CONSTANTS } from '../../../common/constant/channel.constant';
import { DIFFICULTY_VALUE } from '../../../common/types';
import { getKeysWithLowerCase } from '../../../common/helpers';
import { STORY_STATUS } from '@ourloop/shared';

export class AddStoryDto {
  @ApiProperty()
  content: string;

  @ApiProperty({ maxLength: 100, required: false })
  place?: string;

  @ApiProperty({ required: false }) gender?: number;

  @ApiProperty({ maxLength: 100, required: false })
  email?: string;

  @ApiProperty({ required: false }) age?: number;

  @ApiProperty({ required: false }) countryId?: number;

  @ApiProperty({ maxLength: 60, required: false })
  authorNickname?: string;

  @ApiProperty({ maxLength: 3, required: false })
  country: string;

  @ApiProperty({
    type: 'enum',
    required: false,
    enum: getKeysWithLowerCase(DIFFICULTY_VALUE),
    example: getKeysWithLowerCase(DIFFICULTY_VALUE)[0],
  })
  @ApiProperty({ type: Number, required: false })
  difficulty?: string;

  @ApiProperty({ type: 'string', isArray: true, required: false })
  organisations?: string[];

  @ApiProperty({ type: 'number', isArray: true, required: false })
  categories?: number[];

  @ApiProperty({ type: 'number', isArray: true, required: false })
  difficulties?: number[];

  @ApiProperty({ type: 'number', isArray: true, required: false })
  maternityStatus?: number[];

  @ApiProperty({ type: 'string', required: false })
  phone?: string;

  @ApiProperty({ type: 'string', required: false })
  communicatorId?: string;

  @ApiProperty({ type: 'string', required: false })
  status?: STORY_STATUS;

  ageDescriptiveForm?: string;

  genderDescriptiveForm?: string;

  difficultyDescriptiveForm?: string;

  thematics?: null;

  channel?: CHANNEL_CONSTANTS;

  conversationId?: number;

  messengerConversationId?: number;

  ivrrConversationId?: number;

  @ApiProperty({ type: 'boolean', required: false, example: true })
  isSensitive?: boolean;

  @ApiProperty({ type: 'boolean', required: false, example: true })
  userWantContact?: boolean;

  @ApiProperty({ required: false }) regionId?: number;

  isUrgent?: boolean;

  @ApiProperty({ type: 'boolean', required: false, example: true })
  sensitiveStoryContactConsent?: boolean;

  @ApiProperty({ type: 'string', required: false})
  additionalContactDetails?: string;

  @ApiProperty({ type: 'string', required: false})
  disabilitiesOtherExplanation?: string;

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [
        { type: 'string', format: 'uuid' },
        { type: 'string' },
        { type: 'number' }
      ]
    },
    required: false
  })
  vulnerabilityFactors?: (string | number)[];
}
