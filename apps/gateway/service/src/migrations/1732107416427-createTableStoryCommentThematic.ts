import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

export class CreateTableStoryCommentThematic1732107416427
  implements MigrationInterface
{
  private tableName = 'story_comment_thematic';

  private indexThematicName = 'IDX_STORY_COMMENT_THEMATIC_THEMATIC_ID';
  private fkThematicName = 'fk_StoryCommentThematicTothematic';

  private indexStoryCommentName = 'IDX_STORY_COMMENT_THEMATIC_STORY_COMMENT_ID';
  private fkStoryCommentName = 'fk_StoryCommentThematicToStoryComment';

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
            name: 'story_comment_id',
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
          name: this.indexThematicName,
          columnNames: ['thematic_id'],
        }),
      );

      await queryRunner.createForeignKey(
        this.tableName,
        new TableForeignKey({
          columnNames: ['thematic_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'thematic',
          name: this.fkThematicName,
          onDelete: 'CASCADE',
        }),
      );

    await queryRunner.createIndex(
        this.tableName,
        new TableIndex({
          name: this.indexStoryCommentName,
          columnNames: ['story_comment_id'],
        }),
      );

      await queryRunner.createForeignKey(
        this.tableName,
        new TableForeignKey({
          columnNames: ['story_comment_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'story_comment',
          name: this.fkStoryCommentName,
          onDelete: 'CASCADE',
        }),
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName)
  }
}
