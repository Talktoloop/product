import { ApiProperty } from '@nestjs/swagger';

class TextItUuidName {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  name: string;
}

class TextItFields {
  @ApiProperty()
  triggered: string;

  @ApiProperty()
  execution_date: string;
}

export class TextItContactRO {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  language: string;

  @ApiProperty({ type: [String] })
  urns: string[];

  @ApiProperty({ type: [TextItUuidName] })
  groups: TextItUuidName[];

  @ApiProperty({ type: TextItFields })
  fields: TextItFields;

  @ApiProperty({ type: [TextItUuidName] })
  flow: TextItUuidName[];

  @ApiProperty()
  created_on: string;

  @ApiProperty()
  modified_on: string;

  @ApiProperty()
  last_seen_on: string;

  @ApiProperty()
  blocked: boolean;

  @ApiProperty()
  stopped: boolean;
}
