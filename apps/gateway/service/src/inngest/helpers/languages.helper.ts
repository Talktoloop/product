// src/inngest/helpers/languages.ts
import { getDataSource } from './db';
import { LanguageEntity } from '../../language/entity/language.entity';

export type TargetLang = {
    id: number;
    code: string;
    provider: 'aws' | 'google';
    alternativeProvider?: 'aws' | 'google' | null;
};

export async function getEnglishAndTargets(originalTextLangCode: string) {
    const ds = await getDataSource();
    const repo = ds.getRepository(LanguageEntity);

    const languages = await repo.find({ where: { visible: true } });

    const englishRow = languages.find((l) => l.code === 'en');
    if (!englishRow) {
        throw new Error('English language not found');
    }

    const english: TargetLang = {
        code: englishRow.code,
        provider: englishRow.provider,
        alternativeProvider: englishRow.alternativeProvider,
        id: englishRow.id,
    };

    const targets: TargetLang[] = languages
        .filter((l) => l.code !== originalTextLangCode)
        .map((l) => ({
            code: l.code,
            provider: l.provider,
            alternativeProvider: l.alternativeProvider,
            id: l.id
        }));

    return { english, targets };
}