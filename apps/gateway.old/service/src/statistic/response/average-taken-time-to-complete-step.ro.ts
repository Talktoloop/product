import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

class AverageTakenTimeToCompleteStepTooltipRO {
  @Expose()
  @ApiProperty({ type: Number })
  averageTime: number;

  @Expose()
  @ApiProperty({ type: String })
  timeUnit: string;

  @Expose()
  @ApiProperty({ type: Number })
  numberOfCases: number;
}

class AverageTakenTimeToCompleteStepItemRO {
  @Expose()
  @ApiProperty({ type: Number })
  days: number;

  @Expose()
  @ApiProperty({ type: AverageTakenTimeToCompleteStepTooltipRO })
  tooltip: AverageTakenTimeToCompleteStepTooltipRO;
}

@Exclude()
export class AverageTakenTimeToCompleteStepRO {
  @Expose()
  @ApiProperty({ type: AverageTakenTimeToCompleteStepItemRO })
  processAndRefer?: AverageTakenTimeToCompleteStepItemRO;

  @Expose()
  @ApiProperty({ type: AverageTakenTimeToCompleteStepItemRO })
  respondToReferral?: AverageTakenTimeToCompleteStepItemRO;

  @Expose()
  @ApiProperty({ type: AverageTakenTimeToCompleteStepItemRO })
  assessWhetherToInvestigate?: AverageTakenTimeToCompleteStepItemRO;

  @Expose()
  @ApiProperty({ type: AverageTakenTimeToCompleteStepItemRO })
  completeInvestigation?: AverageTakenTimeToCompleteStepItemRO;

  @Expose()
  @ApiProperty({ type: AverageTakenTimeToCompleteStepItemRO })
  informTheAuthorOfOutcome?: AverageTakenTimeToCompleteStepItemRO;

  @Expose()
  @ApiProperty({ type: AverageTakenTimeToCompleteStepItemRO })
  closeCase?: AverageTakenTimeToCompleteStepItemRO;
}
