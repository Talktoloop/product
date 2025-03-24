import { DBLexicon } from './story';
import { OrganisationEntity } from '../../src/organisation/entity/organisation.entity';

export const checkProperties = (
  responseData: DBLexicon,
  dbData: DBLexicon | OrganisationEntity,
  keys: string[] = ['id', 'code'],
): void => {
  for (const key of keys) {
    expect(
      responseData[key] !== undefined && dbData[key] === responseData[key],
    ).toBeTruthy();
  }
};
