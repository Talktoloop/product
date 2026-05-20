import { plainToClass } from 'class-transformer';
import { RecordingsRO } from '../response/recordings.ro';
import { Recordings } from '@ourloop/shared';

export const recordingsMapper = (
  data: Recordings,
  language: string,
): RecordingsRO => {
  return plainToClass(RecordingsRO, {
    intro: data.reply.intro[language],
    outro: data.reply.outro[language],
  });
};
