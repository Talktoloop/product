import { ApiProperty } from "@nestjs/swagger";

export class AirTableDeleteStoryDTO {
    @ApiProperty({ type: String })
    recordId: string;

    @ApiProperty({ type: String })
    loopId: string;

    @ApiProperty({ type: Boolean })
    notSensitive: boolean;
}