import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddMarkedAsSensitiveByUserIdToStoryTable1644936032251
  implements MigrationInterface
{
  private tableName = 'story';
  private foreignKey = 'fk_StoryMarkedAsSensitiveByUserIdToUser';
  private userColumn = new TableColumn({
    name: 'marked_as_sensitive_by_user_id',
    type: 'varchar',
    length: '36',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn(
      this.tableName,
      'marked_as_sensitive_by',
      'marked_as_sensitive_by_role',
    );
    await queryRunner.addColumn(this.tableName, this.userColumn);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: this.foreignKey,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.userColumn);
    await queryRunner.renameColumn(
      this.tableName,
      'marked_as_sensitive_by_role',
      'marked_as_sensitive_by',
    );
  }
}
