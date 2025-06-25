import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddTablePregnantStory1594664897974 implements MigrationInterface {
  private tableName = 'story_pregnancy_status';
  private indexPregnancyStatusName =
    'IDX_STORY_PREGNANCY_STATUS_PREGNANCY_STATUS_ID';
  private fkPregnancyStatusName = 'fk_StoryPregnancyStatusToStory';
  private indexStoryName = 'IDX_STORY_PREGNANCY_STATUS_STORY_ID';
  private fkStoryName = 'fk_StoryPregnancyStatusToStory';

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
            name: 'pregnancy_status_id',
            type: 'int',
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
        name: this.fkPregnancyStatusName,
        columnNames: ['pregnancy_status_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['pregnancy_status_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pregnancy_status',
        name: this.indexPregnancyStatusName,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
