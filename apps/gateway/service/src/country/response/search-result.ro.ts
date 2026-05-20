import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SearchResultItemRO {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @ApiProperty({ example: 1 })
  parentId: number;

  @Expose()
  @ApiProperty({ example: 1 })
  parentName: number;

  @Expose()
  @ApiProperty({ example: 'Poland' })
  name: string;

  @Expose()
  @ApiProperty({ example: 1 })
  numberOfStories: number;

  @Expose()
  @ApiProperty({ example: 1 })
  hasChild: number;
}

@Exclude()
export class SearchResultRO {
  @Expose()
  @ApiProperty({ example: 'pl' })
  countryCode: string;

  @Expose()
  @ApiProperty({ type: SearchResultItemRO, isArray: true })
  items: SearchResultItemRO[];
}
