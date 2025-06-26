declare class AverageTakenTimeToCompleteStepTooltipRO {
    averageTime: number;
    timeUnit: string;
    numberOfCases: number;
}
declare class AverageTakenTimeToCompleteStepItemRO {
    days: number;
    tooltip: AverageTakenTimeToCompleteStepTooltipRO;
}
export declare class AverageTakenTimeToCompleteStepRO {
    processAndRefer?: AverageTakenTimeToCompleteStepItemRO;
    respondToReferral?: AverageTakenTimeToCompleteStepItemRO;
    assessWhetherToInvestigate?: AverageTakenTimeToCompleteStepItemRO;
    completeInvestigation?: AverageTakenTimeToCompleteStepItemRO;
    informTheAuthorOfOutcome?: AverageTakenTimeToCompleteStepItemRO;
    closeCase?: AverageTakenTimeToCompleteStepItemRO;
}
export {};
