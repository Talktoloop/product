import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { StoryListRO } from './story-list.ro';

@Exclude()
export class StoryAdminListRO extends StoryListRO {
  @Expose()
  @ApiProperty()
  createdAt: string;
}
