import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class AddDefaultLanguageIdToCountryTable1684318149723
  implements MigrationInterface
{
  tableName = 'country';
  column = new TableColumn({
    name: 'default_language_id_for_administrative_data',
    type: 'smallint',
    isNullable: true,
  });
  foreignKeyLanguageId = 'fkCountryToLanguage';
  indexLanguageId = 'idxCountryDefaultLanguageIdForAdministrativeData';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexLanguageId,
        columnNames: ['default_language_id_for_administrative_data'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['default_language_id_for_administrative_data'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: this.foreignKeyLanguageId,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyLanguageId);
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
