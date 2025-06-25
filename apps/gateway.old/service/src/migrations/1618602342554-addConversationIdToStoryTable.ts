import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddConversationIdToStoryTable1618857537706
  implements MigrationInterface {
  private tableName = 'story';
  private foreignKeyConversationId = 'fk_StoryToConversationId';
  private newColumn = new TableColumn({
    name: 'conversation_id',
    type: 'int',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conversation',
        name: this.foreignKeyConversationId,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyConversationId,
    );
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
