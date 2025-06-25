import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddInitialUrgencyToCaseSync1666687833849
  implements MigrationInterface
{
  private tableName = 'case_sync';
  private newColumn = new TableColumn({
    name: 'initial_urgency',
    type: 'varchar',
    length: '100',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`initial_urgency\` = \`urgency\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
