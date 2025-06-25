import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class addRejectReasonTextAndRejectReasonLanguageIdToStoryTable1617311277597
  implements MigrationInterface {
  private tableName = 'story';
  private foreignKeyName = 'FKstoryRejectReasonToLanguage';
  private newColumns = [
    new TableColumn({
      name: 'reject_reason_text',
      type: 'text',
      isNullable: true,
    }),
    new TableColumn({
      name: 'reject_reason_language_id',
      type: 'smallint',
      length: '2',
      isNullable: true,
    }),
  ];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.newColumns);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['reject_reason_language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: this.foreignKeyName,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyName);
    await queryRunner.dropColumns(this.tableName, this.newColumns);
  }
}
