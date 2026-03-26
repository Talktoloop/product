import { ApiProperty } from '@nestjs/swagger';
import {
  Exclude,
  Expose,
  Transform,
  plainToClass,
  TransformFnParams,
} from 'class-transformer';
import { OrganisationStoriesRO } from '../../organisation/response/organisation-stories.ro';
import { UserCommentDetailsRO } from '../../user/response/user-comment-details.ro';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { TranslationRO } from '../../common/response/translation';
import { CategoryRO } from '../../category/response/category.ro';

@Exclude()
export class StoryListRO {
  @Expose()
  @ApiProperty({ type: 'string' })
  id: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  content: string;

  @Expose()
  @ApiProperty()
  publishedAt: string;

  @Expose()
  @ApiProperty()
  createdAt: string;

  @Expose()
  @ApiProperty()
  place: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  channel: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  authorNickname?: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  country: string;

  @Expose()
  @ApiProperty({ type: 'number' })
  countryId: number;

  @Expose()
  @ApiProperty({ type: CategoryRO, isArray: true })
  categories: CategoryRO[];

  @Expose()
  @ApiProperty({ type: OrganisationStoriesRO, isArray: true })
  @Transform(({ value }: TransformFnParams) =>
    plainToClass(OrganisationStoriesRO, value),
  )
  organisations: OrganisationStoriesRO[];

  @Expose()
  @ApiProperty({ type: 'number' })
  votes: number;

  @Expose()
  @ApiProperty({ type: 'number' })
  views: number;

  @Expose()
  @ApiProperty({ type: 'number' })
  comments: number;

  @Expose()
  @ApiProperty()
  user?: UserCommentDetailsRO;

  @Expose()
  @ApiProperty({ enum: TRANSLATION_TYPE_CONSTANTS })
  contentType: TRANSLATION_TYPE_CONSTANTS;

  @Expose()
  @ApiProperty({ type: 'string' })
  language: string;

  @Expose()
  @ApiProperty({ type: 'string', isArray: true })
  translations: TranslationRO[];

  @Expose()
  @ApiProperty({ type: Number, isArray: true })
  thematics: number[];

  @Expose()
  @ApiProperty({ type: 'boolean', nullable: true })
  isMinority: boolean | null;
}
