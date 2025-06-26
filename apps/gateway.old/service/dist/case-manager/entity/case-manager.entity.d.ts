import { CaseManagerLanguageEntity } from './case-manager-language.entity';
export declare class CaseManagerEntity {
    id: string;
    nickname: string;
    email: string;
    visible: boolean;
    avatar: string;
    createdAt: Date;
    languages: CaseManagerLanguageEntity[];
}
