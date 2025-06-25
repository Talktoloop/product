import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCategryStartedList1594322931137 implements MigrationInterface {
  private tableName = 'category';
  private listOfCategories = [
    'Thanks',
    'Question',
    'Rumour',
    'Concern',
    'Suggestion',
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    Promise.all(
      this.listOfCategories.map(
        async (category: string) =>
          await queryRunner.query(
            `INSERT INTO \`${this.tableName}\` (\`title\`) VALUES (?)`,
            [category],
          ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const queryBuilder = queryRunner.manager.createQueryBuilder();

    Promise.all(
      this.listOfCategories.map(
        async (category: string) =>
          await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: category })
            .execute(),
      ),
    );
  }
}
