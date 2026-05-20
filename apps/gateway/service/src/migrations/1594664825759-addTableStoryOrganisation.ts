import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddTableStoryOrganisation1594664825759
  implements MigrationInterface {
  private tableName = 'story_organisation';
  private indexOrganisationName = 'IDX_STORY_ORGANISATION_ORGANISATION_ID';
  private fkOrganisationName = 'fk_StoryOrganisationToStory';
  private indexStoryName = 'IDX_STORY_ORGANISATION_STORY_ID';
  private fkStoryName = 'fk_StoryOrganisationToStory';

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
            name: 'organisation_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexStoryName,
        columnNames: ['story_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: this.fkStoryName,
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.fkOrganisationName,
        columnNames: ['organisation_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['organisation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'organisation',
        name: this.indexOrganisationName,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
