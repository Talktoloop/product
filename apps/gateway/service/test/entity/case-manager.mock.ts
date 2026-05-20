import { faker } from '@faker-js/faker';
import { CaseManagerLanguageEntity } from '../../src/case-manager/entity/case-manager-language.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { CaseManagerEntity } from '../../src/case-manager/entity/case-manager.entity';
import { getLanguages } from './language.mock';

export const getCaseManagerStub = async (): Promise<CaseManagerEntity> => {
  const caseManager = new CaseManagerEntity();

  const caseManagerId = faker.string.uuid();
  caseManager.id = caseManagerId;
  caseManager.avatar = faker.internet.avatar();
  caseManager.nickname = faker.internet.userName();
  return caseManager;
};

export const addCaseManagers = async (): Promise<CaseManagerEntity> => {
  const caseManager = await getCaseManagerStub();
  const connection = await getConnection(config);

  return connection.getRepository(CaseManagerEntity).save(caseManager);
};

export const addCaseManagerText = async (
  caseManager: CaseManagerEntity,
): Promise<CaseManagerLanguageEntity> => {
  const caseManagerLanguage = new CaseManagerLanguageEntity();
  const connection = await getConnection(config);
  const languages = await getLanguages();
  caseManagerLanguage.languageId = languages[0].id;
  caseManagerLanguage.caseManagerId = caseManager.id;
  caseManagerLanguage.text = faker.lorem.paragraph(2);

  return connection
    .getRepository(CaseManagerLanguageEntity)
    .save(caseManagerLanguage);
};

export const getCaseManager = async (): Promise<CaseManagerEntity> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(CaseManagerEntity)
    .find()
    .then((result) => result[0]);
};
