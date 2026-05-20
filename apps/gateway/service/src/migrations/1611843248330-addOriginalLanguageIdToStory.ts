import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';
import getDefaultLanguage from './utils/get-default-language';

export class AddOriginalLanguageIdToStory1611843248330
  implements MigrationInterface {
  private tableName = 'story';
  private foreignKeyName = 'FKstoryToLanguage';
  private newColumn = new TableColumn({
    name: 'language_id',
    type: 'smallint',
    length: '2',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    const language = await getDefaultLanguage(queryRunner);
    this.newColumn.default = language.id;
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: this.foreignKeyName,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyName);
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
