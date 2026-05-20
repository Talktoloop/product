import { plainToClass } from 'class-transformer';
import { CaseManagerEntity } from '../entity/case-manager.entity';
import { CaseManagerRO } from '../response/case-manager.ro';

export const caseManagerMapper = (
  caseManager: CaseManagerEntity,
  languageId: number,
): CaseManagerRO => {
  const translation =
    caseManager.languages.find(
      (language) => language.languageId === languageId,
    ) ||
    caseManager.languages.find((language) => language.languageId === 1) ||
    caseManager.languages[0];

  return plainToClass(CaseManagerRO, {
    ...caseManager,
    text: translation?.text ?? null,
  });
};
