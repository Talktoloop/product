import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddCommentRejectReasonTable1634330277727
  implements MigrationInterface {
  private tableName = 'comment_reject_reason';
  private foreignKeyCommentId = 'FK_commentRejectReasonToComment';
  private foreignKeyRejectReasonId = 'FK_commentRejectReasonToRejectReason';
  private rejectReasonIdIndex = 'IDX_COMMENT_REJECT_REASON_ID';
  private commentIdIndex = 'IDX_COMMENT_REJECT_REASON_COMMENT_ID';

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
            name: 'comment_id',
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
        name: this.commentIdIndex,
        columnNames: ['comment_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['comment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'comment',
        name: this.foreignKeyCommentId,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
