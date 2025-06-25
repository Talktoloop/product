import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddLanguageIdToUserTable1612383929312
  implements MigrationInterface {
  private tableName = 'user';
  private foreignKeyName = 'FKuserToLanguage';
  private newColumn = new TableColumn({
    name: 'language_id',
    type: 'smallint',
    length: '2',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
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
