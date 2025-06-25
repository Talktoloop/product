import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class AddTableCaseMangerTranslation1621108021490
  implements MigrationInterface {
  private tableName = 'case_manager_text';
  private indexCaseManagerText = 'IDX_CASE_MANAGER_CASE_MANAGER_TEXT';
  private fkCaseManagerText = 'fk_CaseManagerText';
  private indexCaseManagerLanguage = 'IDX_CASE_MANAGER_LANGUAGE_ID';
  private fkCaseManagerLanguage = 'fk_CaseManagerLanguage';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'smallint',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'case_manager_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'language_id',
            type: 'smallint',
            isNullable: false,
          },
          {
            name: 'text',
            type: 'text',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.fkCaseManagerText,
        columnNames: ['case_manager_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['case_manager_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'case_manager',
        name: this.indexCaseManagerText,
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.fkCaseManagerLanguage,
        columnNames: ['language_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: this.indexCaseManagerLanguage,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(this.tableName, this.indexCaseManagerLanguage);
    await queryRunner.dropForeignKey(
      this.tableName,
      this.fkCaseManagerLanguage,
    );
    await queryRunner.dropIndex(this.tableName, this.indexCaseManagerText);
    await queryRunner.dropForeignKey(this.tableName, this.fkCaseManagerText);
    await queryRunner.dropTable(this.tableName);
  }
}
