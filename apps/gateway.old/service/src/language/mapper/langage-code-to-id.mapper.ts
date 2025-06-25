import { LanguageEntity } from '../entity/language.entity';

export const languageCodeToIdMapper = (
  languages: LanguageEntity[],
): Record<string, number> => {
  const data: Record<string, number> = {};

  for (const item of languages) {
    data[item.code] = item.id;
  }

  return data;
};
