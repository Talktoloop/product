import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SummaryRO {
  @Expose()
  @ApiProperty({ example: 10 })
  numberOfOrganisations: number;

  @Expose()
  @ApiProperty({ example: 10 })
  numberOfLanguages: number;

  @Expose()
  @ApiProperty({ example: 10 })
  numberOfFeedback: number;

  @Expose()
  @ApiProperty({ example: 10 })
  numberOfComments: number;

  @Expose()
  currentTime: string;
}
