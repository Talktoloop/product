import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddRejectReasonToComment1599815408987
  implements MigrationInterface {
  private tableName = 'comment';

  private newColumns = [
    new TableColumn({
      name: 'reject_reason_id',
      type: 'int',
      isNullable: true,
    }),
    new TableColumn({
      name: 'reject_rationale',
      type: 'text',
      isNullable: true,
    }),
  ];

  private indexName = 'IDX_COMMENT_REJECT_REASON_ID';
  private fkName = 'fk_CommentRejectReason';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.newColumns);

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexName,
        columnNames: ['reject_reason_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['reject_reason_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'reject_reason',
        name: this.fkName,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.newColumns);
  }
}
