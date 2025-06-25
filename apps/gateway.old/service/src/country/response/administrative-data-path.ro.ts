import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AdministrativeDataPathRO {
  @Expose()
  @ApiProperty({ example: 'Poland' })
  path: string;
}
