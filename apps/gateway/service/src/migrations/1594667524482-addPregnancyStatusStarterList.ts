import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPregnancyStatusStarterList1594667524482
  implements MigrationInterface {
  private tableName = 'pregnancy_status';
  private listOfPregnant = [
    'Not pregnant and breastfeeding',
    'Pregnant',
    'Breastfeeding',
    'Both pregnant and breastfeeding',
    'Not disclosed',
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.listOfPregnant.map(
        async (pregnant: string) =>
          await queryRunner.query(
            `
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `,
            [pregnant],
          ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const queryBuilder = queryRunner.manager.createQueryBuilder();

    await Promise.all(
      this.listOfPregnant.map(
        async (pregnant: string) =>
          await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: pregnant })
            .execute(),
      ),
    );
  }
}
