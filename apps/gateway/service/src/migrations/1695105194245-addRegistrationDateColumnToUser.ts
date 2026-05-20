import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addRegistrationDateColumnToUser1695105194245
  implements MigrationInterface
{
  tableName = 'user';
  column = new TableColumn({
    name: 'registration_date',
    type: 'datetime',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
