import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ModeratorEntity } from '../../lexicon/entity/moderator.entity';

@Exclude()
export class AssignStoriesRO {
  @Expose()
  @ApiProperty({ isArray: true, type: String })
  assignedStoriesIds: string[];

  @Expose()
  @ApiProperty({type: String })
  assignedModerator: ModeratorEntity;
}
