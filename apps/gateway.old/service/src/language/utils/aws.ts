import { Logger } from '@nestjs/common';
import { InvocationResponse } from '@aws-sdk/client-lambda';

export const getPayloadFromTranslation = (
  translation: InvocationResponse,
): string => {
  const logger = new Logger('AWS');
  try {
    logger.log('getPayloadFromTranslation');
    const { body } = JSON.parse(translation.Payload.toString());
    logger.log('body = ', body);
    const translatedText = JSON.parse(body).message.TranslatedText;
    return translatedText;
  } catch (error) {
    logger.error('Incorrect AWS response getPayloadFromTranslation', error);
    return '';
  }
};
