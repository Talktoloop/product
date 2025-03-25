import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDifficultiesStarterList1594667006438
  implements MigrationInterface {
  private tableName = 'difficulty';
  private listOfdifficulties = [
    'Seeing',
    'Hearing',
    'Walking or climbing steps',
    'Remembering or concentrating',
    'Self-care',
    'Communication',
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.listOfdifficulties.map(
        async (difficulty: string) =>
          await queryRunner.query(
            `
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `,
            [difficulty],
          ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const queryBuilder = queryRunner.manager.createQueryBuilder();

    Promise.all(
      this.listOfdifficulties.map(
        async (difficulty: string) =>
          await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: difficulty })
            .execute(),
      ),
    );
  }
}
