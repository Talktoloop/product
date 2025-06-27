export interface IGetOutboxIntroOutroRecordings {
  intro: IRecordingRO;
  outro: IRecordingRO;
}

export interface IRecordingRO {
  text: string;
  audio: string;
}
