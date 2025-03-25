import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddRecipientIdToStoryTable1676282670248
  implements MigrationInterface
{
  tableName = 'story';
  indexRecipientId = 'IDX_STORY_RECIPIENT_ID';
  fkRecipientId = 'fk_StoryToStoryRecipient';

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
        referencedTableName: 'story_recipient',
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
