import { LanguageEntity } from '../../language/entity/language.entity';
import { CaseManagerEntity } from './case-manager.entity';
export declare class CaseManagerLanguageEntity {
    id: number;
    text: string;
    languageId: number;
    language: LanguageEntity;
    caseManagerId: string;
    caseManager: CaseManagerEntity;
}
