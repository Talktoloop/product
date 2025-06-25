import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentCommentDTO {
  @ApiProperty({ type: 'string', required: true })
  language?: string;

  @ApiProperty({ type: Number, isArray: true })
  thematics: number[];

  @ApiProperty({ type: Boolean, required: true })
  solution_proposed: boolean;
}
