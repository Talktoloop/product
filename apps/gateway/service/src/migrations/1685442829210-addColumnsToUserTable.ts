import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsToUserTable1685442829210 implements MigrationInterface {
  tableName = 'user';
  columns = [
    new TableColumn({
      name: 'first_name',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
    new TableColumn({
      name: 'last_name',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
    new TableColumn({
      name: 'type',
      type: 'enum',
      enum: ['individual', 'organisation-unit'],
      enumName: 'typeEnum',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.columns);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NULL`,
      ['individual'],
    );
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NOT NULL`,
      ['organisation-unit'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.columns);
  }
}
