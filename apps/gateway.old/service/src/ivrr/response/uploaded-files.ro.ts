import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UploadedFilesRO {
  @Expose()
  @ApiProperty({ type: Array })
  s3FileIds: string[];
}
