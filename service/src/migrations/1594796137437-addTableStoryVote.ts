import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddTableStoryVote1594796137437 implements MigrationInterface {
  private tableName = 'story_vote';
  private indexStoryName = 'IDX_STORY_VOTE_STORY_ID';
  private fkStoryName = 'fk_StoryVoteStory';
  private indexHash = 'IDX_STORY_VOTE_HASH';

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
            name: 'hash',
            type: 'varchar',
            length: '60',
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
        name: this.indexHash,
        columnNames: ['hash'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable(this.tableName);
  }
}
