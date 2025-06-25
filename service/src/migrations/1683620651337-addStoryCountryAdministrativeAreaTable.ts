import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddStoryCountryAdministrativeAreaTable1683620651337
  implements MigrationInterface
{
  tableName = 'story_country_administrative_area';
  foreignKeyStoryId = 'fkStoryCountryAdministrativeAreaToStory';
  indexStoryId = 'idxStoryCountryAdministrativeAreaStoryId';
  foreignKeyAdministrativeAreaId =
    'fkStoryCountryAdministrativeAreaToCountryAdministrativeArea';
  indexAdministrativeAreaId =
    'idxStoryCountryAdministrativeAreaAdministrativeAreaId';

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
            name: 'story_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'administrative_area_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            length: '6',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexStoryId,
        columnNames: ['story_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: this.foreignKeyStoryId,
        onDelete: 'CASCADE',
      }),
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyStoryId);
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyAdministrativeAreaId,
    );
    await queryRunner.dropTable(this.tableName);
  }
}
