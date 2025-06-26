import { QueryRunner } from 'typeorm';
declare const getThematicAreaCategories: (queryRunner: QueryRunner) => Promise<Record<string, number>>;
export default getThematicAreaCategories;
