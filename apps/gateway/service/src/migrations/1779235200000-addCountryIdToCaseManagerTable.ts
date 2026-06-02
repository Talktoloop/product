import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCountryIdToCaseManagerTable1779235200000
  implements MigrationInterface
{
  private tableName = 'case_manager';
  private foreignKeyName = 'FKcaseManagerToCountry';
  private newColumn = new TableColumn({
    name: 'country_id',
    type: 'smallint',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['country_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'country',
        name: this.foreignKeyName,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyName);
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
