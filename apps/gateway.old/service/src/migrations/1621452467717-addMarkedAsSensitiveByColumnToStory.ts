import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddMarkedAsSensitiveByColumnToStory1621452467717
  implements MigrationInterface {
  private tableName = 'story';
  private newColumnName = 'marked_as_sensitive_by';

  private newColumn = new TableColumn({
    name: this.newColumnName,
    type: 'enum',
    enum: ['moderator', 'author'],
    enumName: 'isSensitive enum',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumnName);
  }
}
