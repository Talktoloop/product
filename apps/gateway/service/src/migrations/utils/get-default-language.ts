import { QueryRunner } from 'typeorm';

const getDefaultLanguage = async (
  queryRunner: QueryRunner,
): Promise<{ id: string; code: string }> => {
  return queryRunner
    .query(`SELECT \`id\` FROM \`language\` WHERE is_default iS TRUE`)
    .then((result) => result.pop());
};

export default getDefaultLanguage;
