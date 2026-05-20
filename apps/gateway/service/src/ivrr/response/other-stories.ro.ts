import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OtherStoriesBySameRecipientRO {
    @Expose()
    @ApiProperty({ type: String })
    id: string;

    @Expose()
    @ApiProperty({ type: String })
    status: string;

    @Expose()
    @ApiProperty({ type: Date })
    createdAt: Date;

    @Expose()
    @ApiProperty({ type: String })
    channel: string;

    @Expose()
    @ApiProperty({ type: String })
    url: string;
}