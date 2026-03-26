import { ApiProperty } from "@nestjs/swagger";

export class UpdateTranscriptionDto {
    @ApiProperty({ type: 'string', required: false })
    content?: string;

    @ApiProperty({ type: 'string', required: false })
    editedContent?: string;
}
