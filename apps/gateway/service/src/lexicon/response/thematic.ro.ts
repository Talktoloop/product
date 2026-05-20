import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { LexiconRO } from './lexicon.ro';

@Exclude()
export class ThematicRO {
  @Expose()
  @ApiProperty()
  code: string;

  @Expose()
  @ApiProperty()
  id: number;
  @Expose()
  @ApiProperty()
  count: number;

  @Expose()
  @ApiProperty({ type: LexiconRO, isArray: true })
  children: LexiconRO[];
}
