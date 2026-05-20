import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddTableStoryThematic1594665915409 implements MigrationInterface {
  private tableName = 'story_thematic';
  private indexThematicName = 'IDX_STORY_THEMATIC_THEMATIC_ID';
  private fkThematicName = 'fk_StoryThematicTothematic';
  private indexStoryName = 'IDX_STORY_THEMATIC_STORY_ID';
  private fkStoryName = 'fk_StoryThematicToStory';

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
            name: 'thematic_id',
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
        name: this.fkThematicName,
        columnNames: ['thematic_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['thematic_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'thematic',
        name: this.indexThematicName,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
