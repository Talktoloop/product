import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddThematicStarterList1594666965618 implements MigrationInterface {
  private tableName = 'thematic';
  private listOfThematic = ['Helth', 'WASH', 'Education', 'High school'];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.listOfThematic.map(
        async (thematic: string) =>
          await queryRunner.query(
            `
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `,
            [thematic],
          ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const queryBuilder = queryRunner.manager.createQueryBuilder();

    Promise.all(
      this.listOfThematic.map(
        async (thematic: string) =>
          await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: thematic })
            .execute(),
      ),
    );
  }
}
