import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addAdditionalColumnsToOrganisationTable1686036278893
  implements MigrationInterface
{
  tableName = 'organisation';
  columns = [
    new TableColumn({
      name: 'verified',
      type: 'boolean',
      isNullable: false,
      default: false,
    }),
    new TableColumn({
      name: 'country_id',
      type: 'integer',
      isNullable: true,
    }),
    new TableColumn({
      name: 'acronym',
      type: 'varchar',
      isNullable: true,
      length: '16',
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.columns);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`verified\` = ?`,
      [true],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.columns);
  }
}
