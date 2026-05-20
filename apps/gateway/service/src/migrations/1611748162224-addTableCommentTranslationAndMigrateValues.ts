import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';
import getDefaultLanguage from './utils/get-default-language';

export class AddTableCommentTranslationAndMigrateValues1611748162224
  implements MigrationInterface {
  private translationTableName = 'comment_translation';
  private migratedTableName = 'comment';
  private migrationColumn = new TableColumn({
    name: 'comment',
    type: 'text',
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.translationTableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'comment_id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'language_id',
            type: 'smallint',
            length: '2',
          },
          {
            name: 'content',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            length: '6',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP(6)',
          },
          {
            name: 'updated_at',
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
      this.translationTableName,
      new TableIndex({
        name: 'IDXcommentTranslationStoryId',
        columnNames: ['comment_id'],
      }),
    );
    await queryRunner.createIndex(
      this.translationTableName,
      new TableIndex({
        name: 'IDXcommentTranslationLanguageId',
        columnNames: ['language_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.translationTableName,
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: 'FKcommentTranslationToLanguage',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.translationTableName,
      new TableForeignKey({
        columnNames: ['comment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'comment',
        name: 'FKcommentTranslationToComment',
        onDelete: 'CASCADE',
      }),
    );

    const language = await getDefaultLanguage(queryRunner);
    const comments = await queryRunner.query(
      `SELECT \`id\`, \`comment\` FROM \`${this.migratedTableName}\``,
    );

    for (const comment of comments) {
      await queryRunner.query(
        `INSERT INTO \`${this.translationTableName}\` (\`comment_id\`, \`language_id\`, \`content\`) VALUES (?, ?, ?)`,
        [comment.id, language.id, comment.comment],
      );
    }

    await queryRunner.dropColumn(this.migratedTableName, this.migrationColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const language = await getDefaultLanguage(queryRunner);
    const translations = await queryRunner.query(
      `SELECT \`comment_id\`, \`content\` FROM \`${this.translationTableName}\` WHERE \`language_id\` = ${language.id}`,
    );

    await queryRunner.addColumn(this.migratedTableName, this.migrationColumn);

    for (const translation of translations) {
      await queryRunner.query(
        `UPDATE \`${this.migratedTableName}\` SET \`comment\` = ? WHERE id = ?`,
        [translation.content, translation.comment_id],
      );
    }

    await queryRunner.dropTable(this.translationTableName);
  }
}
