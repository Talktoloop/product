import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveTypeColumnFromUserTable1687342167953
  implements MigrationInterface
{
  tableName = 'user';
  column = new TableColumn({
    name: 'type',
    type: 'enum',
    enum: ['individual', 'organisation-unit'],
    enumName: 'typeEnum',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NULL`,
      ['individual'],
    );
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NOT NULL`,
      ['organisation-unit'],
    );
  }
}
