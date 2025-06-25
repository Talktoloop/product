import { ApiProperty } from '@nestjs/swagger';

export class FlowResponseRequestDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  type: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  isStory: boolean;
}
