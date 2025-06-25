import { faker } from '@faker-js/faker';
import {
  addLanguage,
  getLanguages,
  getLanguageFromList,
} from '../entity/language.mock';
import {
  SENDER_TYPE_CONSTANT,
  MESSAGE_PROVIDER_CONSTANT,
  MESSAGE_TYPE_CONSTANT,
  SMSConversationModel,
} from '@ourloop/shared';
import { LanguageEntity } from '../../src/language/entity/language.entity';
import { LANGUAGES_CONSTANTS } from '../../src/common/constant/languages.constants';
import { getRandomCountry, getCountries } from '../entity/country.mock';

export const getSMSConversationMock =
  async (): Promise<SMSConversationModel> => {
    const languages = await getLanguages();
    const countries = await getCountries();
    const country = await getRandomCountry(countries);
    const language = getLanguageFromList(languages, false);

    const userPhoneNumber = faker.number.int(1000).toString();

    return {
      isSensitive: false,
      country: country.code,
      loopPhoneNumber: faker.number.int(1000).toString(),
      messages: [
        {
          type: MESSAGE_TYPE_CONSTANT.SMS,
          content: faker.lorem.sentence(),
          language: language.code,
          timestamp: '2021-04-19T09:38:22.184Z',
          sender: SENDER_TYPE_CONSTANT.LOOP,
          provider: MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING,
          tag: 'welcome',
          queJobId: faker.number.int(100).toString(),
        },
        {
          type: MESSAGE_TYPE_CONSTANT.SMS,
          content: faker.lorem.sentence(),
          timestamp: '2021-04-19T09:38:29.965Z',
          sender: SENDER_TYPE_CONSTANT.USER,
          language: language.code,
          isStory: true,
          provider: MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING,
          queJobId: faker.number.int(100).toString(),
        },
        {
          type: MESSAGE_TYPE_CONSTANT.SMS,
          content: faker.lorem.sentence(),
          language: language.code,
          timestamp: '2021-04-19T09:38:30.166Z',
          sender: SENDER_TYPE_CONSTANT.LOOP,
          tag: 'storyIsSubmitted',
          provider: MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING,
          queJobId: faker.number.int(100).toString(),
        },
        {
          type: MESSAGE_TYPE_CONSTANT.SMS,
          content: faker.lorem.sentence(),
          timestamp: '2021-04-19T09:38:36.085Z',
          sender: SENDER_TYPE_CONSTANT.USER,
          language: language.code,
          isStory: false,
          provider: MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING,
          queJobId: faker.number.int(100).toString(),
        },
        {
          type: MESSAGE_TYPE_CONSTANT.SMS,
          content: faker.lorem.sentence(),
          language: language.code,
          timestamp: '2021-04-19T09:38:36.434Z',
          sender: SENDER_TYPE_CONSTANT.LOOP,
          tag: 'supportingInformationIsSubmitted',
          provider: MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING,
          queJobId: faker.number.int(100).toString(),
        },
      ],
      userPhoneNumber,
    };
  };

export const initializeDataset = async (): Promise<{
  languages: LanguageEntity[];
}> => {
  await addLanguage({
    isDefault: false,
    code: LANGUAGES_CONSTANTS.NYANJA,
  });

  for (let i = 0; i < 3; i++) {
    await addLanguage();
  }

  const languages = await getLanguages();

  return {
    languages,
  };
};
