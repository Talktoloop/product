import { QueryRunner } from 'typeorm';

const getThematicAreaCategories = async (
  queryRunner: QueryRunner,
): Promise<Record<string, number>> => {
  const categories = await queryRunner.query(
    `SELECT \`id\`, \`code\` FROM \`thematic\` WHERE \`parent_thematic_id\` IS NULL`,
  );

  return categories.reduce(
    (data, category) => ((data[category.code] = category.id), data),
    {},
  );
};

export default getThematicAreaCategories;
