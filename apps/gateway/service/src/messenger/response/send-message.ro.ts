import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { SuccessRO } from '../../common/response/success.ro';

@Exclude()
export class SendMessageRO extends SuccessRO {
  @Expose()
  @ApiProperty({ required: false })
  status?: string;
}
