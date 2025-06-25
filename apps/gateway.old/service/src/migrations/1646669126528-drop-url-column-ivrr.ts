import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class dropUrlColumnIvrr1646669126528 implements MigrationInterface {
  name = 'dropUrlColumnIvrr1646669126528';
  tableName = 'ivrr_call';
  column = new TableColumn({
    name: 'url',
    type: 'text',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }
}
