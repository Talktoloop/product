import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class AddOrganisationsStarterList1594666949065
  implements MigrationInterface {
  private tableName = 'organisation';
  private listOfOrganisation = [
    'Red Cross',
    'Meheba camp',
    'Belay Rehabilitation Ceter',
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.listOfOrganisation.map(
        async (organisation: string) =>
          await queryRunner.query(
            `
						INSERT INTO \`${this.tableName}\` (\`name\`, \`id\` )
						VALUES (?, ?)
					  `,
            [organisation, uuidv4()],
          ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const queryBuilder = queryRunner.manager.createQueryBuilder();

    Promise.all(
      this.listOfOrganisation.map(
        async (organisation: string) =>
          await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ name: organisation })
            .execute(),
      ),
    );
  }
}
