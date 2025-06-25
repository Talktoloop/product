import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddCountryAdministrativeAreaNameTable1684243291213
  implements MigrationInterface
{
  tableName = 'country_administrative_area_name';
  foreignKeyAdministrativeAreaId =
    'fkCountryAdministrativeAreaNameToCountryAdministrativeArea';
  indexAdministrativeAreaId =
    'idxCountryAdministrativeAreaNameAdministrativeAreaId';
  foreignKeyLanguageId = 'fkCountryAdministrativeAreaNameToLanguage';
  indexLanguageId = 'idxCountryAdministrativeAreaNameLanguageId';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'language_id',
            type: 'smallint',
            isNullable: false,
          },
          {
            name: 'administrative_area_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '150',
            isNullable: false,
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexAdministrativeAreaId,
        columnNames: ['administrative_area_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['administrative_area_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'country_administrative_area',
        name: this.foreignKeyAdministrativeAreaId,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexLanguageId,
        columnNames: ['language_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: this.foreignKeyLanguageId,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyAdministrativeAreaId,
    );
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyLanguageId);
    await queryRunner.dropTable(this.tableName);
  }
}
