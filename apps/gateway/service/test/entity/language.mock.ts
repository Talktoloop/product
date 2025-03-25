import { faker } from '@faker-js/faker';
import { LanguageEntity } from '../../src/language/entity/language.entity';
import { UpdateResult } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { PROVIDER_TYPE } from '../../src/language/interface/provider.enum';

export const addLanguage = async (
  params: {
    isDefault: boolean;
    code?: string;
    provider?: PROVIDER_TYPE;
    length?: number;
  } = { isDefault: false },
): Promise<LanguageEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(LanguageEntity).save({
    code: params.code ?? getRandomLanguageCode(params.length),
    isDefault: params.isDefault,
    provider: params.provider ?? undefined,
  });
};

export const getLanguages = async (): Promise<LanguageEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(LanguageEntity).find();
};

export const getLanguageById = async (id: number): Promise<LanguageEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(LanguageEntity).findOne({ where: { id } });
};

export const getRandomLanguageCode = (length = 2): string => {
  return faker.string.alphanumeric(length);
};

export const getDefaultLanguage = async (): Promise<LanguageEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(LanguageEntity).findOne({
    where: {
      isDefault: true,
    },
  });
};

export const getLanguageFromList = (
  languages: LanguageEntity[],
  isDefault = true,
): LanguageEntity => {
  return languages.filter((entity) => entity.isDefault === isDefault)[0];
};

export const setDefaultLanguage = async (id: number): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  await connection
    .getRepository(LanguageEntity)
    .update({ isDefault: true }, { isDefault: false });

  return connection
    .getRepository(LanguageEntity)
    .update(id, { isDefault: true });
};
