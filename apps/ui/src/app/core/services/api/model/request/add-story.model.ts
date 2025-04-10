import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { Age } from '@shared/types/age.type';
import { Gender } from '@shared/types/gender.type';

export interface IAddStoryDTO {
  /**
   * Story content, written by user.
   */
  content: string;
  /**
   * Place where the story taken place. Region rather than a precise location.
   */
  place?: string;
  gender?: Gender;
  email?: string;
  age?: Age;
  /**
   * User name. Don't have to be a nickname
   */
  authorNickname?: string;
  country?: string;
  organisations?: string[];
  isSensitive: boolean;
  categories?: number[];
  difficulties?: number[];
  maternityStatus?: number[];
  phone?: string;
  channel: CHANNEL_CONSTANTS;
  regionId?: number;
  additionalContactDetails?: string
  sensitiveStoryContactConsent: boolean
}
