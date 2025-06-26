import { QueryRunner } from 'typeorm';
declare const getDefaultLanguage: (queryRunner: QueryRunner) => Promise<{
    id: string;
    code: string;
}>;
export default getDefaultLanguage;
