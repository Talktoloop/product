import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class WhatAreTheOutcomesRO {
  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  offenceSubstantiatedAndOffender: number;

  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  offenderResignedFromOrganisation: number;

  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  offenderFacedDisciplinary: number;

  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  notEnoughInformation: number;

  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  other: number;

  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  referralToClearCheckMade: number;

  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  completedInvestigations: number;

  @Expose()
  @ApiProperty({ type: Number, example: 1 })
  notSubstantiated: number;
}
