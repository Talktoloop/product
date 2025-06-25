import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddMachineTranslatedColumnToLanguageTable1614586462381
  implements MigrationInterface {
  private tableName = 'language';
  private newColumn = new TableColumn({
    name: 'machine_translated',
    type: 'tinyint',
    length: '1',
    isNullable: false,
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.newColumn.name}\` = true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
