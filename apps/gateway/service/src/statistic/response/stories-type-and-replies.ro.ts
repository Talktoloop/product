import { ApiProperty } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class StoriesTypeAndRepliesRO {
  @Expose()
  @ApiProperty()
  percentOfStoriesWithResponded: number;

  @Expose()
  @ApiProperty()
  percentOfStoriesWithOrganisationResponded: number;

  @Expose()
  @ApiProperty()
  countOfTaggedOrganisation: number;

  @Expose()
  @ApiProperty()
  uniqueAuthors: number;

  @Expose()
  @ApiProperty()
  countOfFeedbacks: number;

  @Expose()
  @ApiProperty()
  avgResponseTime: number;

  @Expose()
  @ApiProperty()
  countOfResponses: number;
}
