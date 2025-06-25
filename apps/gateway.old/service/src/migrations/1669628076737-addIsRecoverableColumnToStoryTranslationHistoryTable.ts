import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsRecoverableColumnToStoryTranslationHistoryTable1669628076737
  implements MigrationInterface
{
  private tableName = 'story_translation_history';
  private newColumn = new TableColumn({
    name: 'is_recoverable',
    type: 'boolean',
    isNullable: false,
    default: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`is_recoverable\` = false WHERE content = ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
