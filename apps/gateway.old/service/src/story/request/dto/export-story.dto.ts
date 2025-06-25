import { ApiProperty } from '@nestjs/swagger';

export class ExportStoryDto {
  @ApiProperty({ type: Boolean, required: true })
  immediateAssistance: boolean;

  @ApiProperty({ maxLength: 65535, required: true })
  note: string;
}
