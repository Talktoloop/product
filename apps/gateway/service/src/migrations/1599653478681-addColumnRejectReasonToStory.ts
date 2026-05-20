import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddColumnRejectReasonToStory1599653478681
  implements MigrationInterface {
  private tableName = 'story';

  private newColumn = new TableColumn({
    name: 'reject_reason_id',
    type: 'int',
    isNullable: true,
  });

  private indexName = 'IDX_STORY_REJECT_REASON_ID';
  private fkName = 'fk_StoryRejectReason';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

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
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
