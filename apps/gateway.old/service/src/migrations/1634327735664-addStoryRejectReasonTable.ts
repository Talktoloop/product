import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddStoryRejectReasonTable1634327735664
  implements MigrationInterface {
  private tableName = 'story_reject_reason';
  private foreignKeyStoryId = 'FK_storyRejectReasonToStory';
  private foreignKeyRejectReasonId = 'FK_storyRejectReasonToRejectReason';
  private rejectReasonIdIndex = 'IDX_STORY_REJECT_REASON_ID';
  private storyIdIndex = 'IDX_STORY_REJECT_REASON_STORY_ID';

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
            name: 'reject_reason_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'reject_reason_text',
            type: 'text',
            isNullable: true,
          },
        ],
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.rejectReasonIdIndex,
        columnNames: ['reject_reason_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['reject_reason_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'reject_reason',
        name: this.foreignKeyRejectReasonId,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.storyIdIndex,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
