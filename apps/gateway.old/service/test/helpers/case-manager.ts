import { CaseManagerEntity } from '../../src/case-manager/entity/case-manager.entity';
import {
  addCaseManagers,
  addCaseManagerText,
} from '../entity/case-manager.mock';

export const initializeDataset = async (): Promise<{
  caseManager: CaseManagerEntity;
}> => {
  const caseManager = await addCaseManagers();
  await addCaseManagerText(caseManager);
  return { caseManager };
};
