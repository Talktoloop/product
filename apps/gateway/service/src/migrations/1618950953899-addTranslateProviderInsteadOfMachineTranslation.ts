import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTranslateProviderInsteadOfMachineTranslation1618950953899
  implements MigrationInterface {
  private tableName = 'language';
  private columnToDrop = 'machine_translated';
  private columnToAdd = 'provider';

  private newColumn = new TableColumn({
    name: this.columnToAdd,
    type: 'varchar',
    length: '10',
    isNullable: true,
  });

  private oldColumn = new TableColumn({
    name: 'machine_translated',
    type: 'tinyint',
    length: '1',
    isNullable: false,
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.columnToDrop);
    await queryRunner.addColumn(this.tableName, this.newColumn);

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnToAdd}\` = ? WHERE \`code\` NOT IN('ny', 'cew')`,
      ['aws'],
    );

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnToAdd}\` = ? WHERE \`code\` = ? `,
      ['google', 'ny'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.columnToAdd);
    await queryRunner.addColumn(this.tableName, this.oldColumn);
  }
}
