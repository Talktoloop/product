import { Repository } from 'typeorm';
import { LanguageEntity } from './entity/language.entity';
export declare class LanguageRepository extends Repository<LanguageEntity> {
    findAllLanguageProviders(): Promise<LanguageEntity[]>;
    findMachineTranslatedLanguages(order?: string[]): Promise<LanguageEntity[]>;
    findByCodeOrDefault(code: string): Promise<LanguageEntity[]>;
}
