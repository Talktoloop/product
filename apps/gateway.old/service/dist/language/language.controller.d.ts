import { LanguageService } from './language.service';
import { checkTranslationDto } from './request/dto/check-translation.dto';
import { CheckTranslationRO } from './response/check-translation.ro';
import { LanguageRO } from './response/language.ro';
export declare class LanguageController {
    private readonly languageService;
    constructor(languageService: LanguageService);
    checkTranslation(data: checkTranslationDto): Promise<CheckTranslationRO>;
    getListOfTranslations(): Promise<LanguageRO[]>;
    getListOfAllLanguages(): Promise<LanguageRO[]>;
}
