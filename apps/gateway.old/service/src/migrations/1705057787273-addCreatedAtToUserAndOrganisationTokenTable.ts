import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCreatedAtToUserAndOrganisationTokenTable1705057787273
  implements MigrationInterface
{
  tableName1 = 'user_token';
  tableName2 = 'organisation_token';

  column = new TableColumn({
    name: 'created_at',
    type: 'datetime',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName1, this.column);
    await queryRunner.addColumn(this.tableName2, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName1, this.column);
    await queryRunner.dropColumn(this.tableName2, this.column);
  }
}
