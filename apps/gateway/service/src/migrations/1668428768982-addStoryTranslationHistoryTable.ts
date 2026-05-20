import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddStoryTranslationHistoryTable1668428768982
  implements MigrationInterface
{
  private tableName = 'story_translation_history';
  private foreignKeyStoryTranslationId =
    'FKhistoricalStoryTranslationToStoryTranslation';
  private foreignKeyUserId = 'FKhistoricalStoryTranslationToUser';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'translation_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'moderator_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'content',
            type: 'mediumtext',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            length: '6',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: 'IDXhistoricalStoryTranslationTranslationId',
        columnNames: ['translation_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['translation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story_translation',
        name: this.foreignKeyStoryTranslationId,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['moderator_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: this.foreignKeyUserId,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyStoryTranslationId,
    );
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyUserId);
    await queryRunner.dropTable(this.tableName);
  }
}
