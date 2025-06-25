import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddRecipientIdToCommentTable1676547084797
  implements MigrationInterface
{
  tableName = 'comment';
  indexRecipientId = 'IDX_COMMENT_RECIPIENT_ID';
  fkRecipientId = 'fk_CommentToStoryCommentRecipient';

  private newColumn = new TableColumn({
    name: 'recipient_id',
    type: 'int',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexRecipientId,
        columnNames: [this.newColumn.name],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: [this.newColumn.name],
        referencedColumnNames: ['id'],
        referencedTableName: 'story_comment_recipient',
        name: this.fkRecipientId,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.fkRecipientId);
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
