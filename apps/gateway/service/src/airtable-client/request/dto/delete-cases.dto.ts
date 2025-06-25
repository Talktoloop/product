import { ApiProperty } from '@nestjs/swagger';

export class DeleteCasesDTO {
  @ApiProperty({ type: String, isArray: true })
  ids: string[];
}
