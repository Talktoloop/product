import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCommentIdToIvrrCallTable1651051444490
  implements MigrationInterface
{
  private tableName = 'ivrr_call';
  private newColumn = new TableColumn({
    name: 'comment_id',
    type: 'varchar',
    length: '36',
    isNullable: true,
  });
  private foreignKeyCommentId = 'fk_IVRRCallToCommentId';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['comment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'comment',
        name: this.foreignKeyCommentId,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCommentId);
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
