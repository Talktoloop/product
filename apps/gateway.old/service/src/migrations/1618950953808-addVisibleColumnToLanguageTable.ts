import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddVisibleColumnToLanguageTable1618950953808
  implements MigrationInterface {
  private tableName = 'language';
  private newColumn = new TableColumn({
    name: 'visible',
    type: 'boolean',
    default: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`visible\` = ? WHERE code = ?`,
      [false, 'cew'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
