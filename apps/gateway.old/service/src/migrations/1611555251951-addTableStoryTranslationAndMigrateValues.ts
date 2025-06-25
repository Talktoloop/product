import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey,
} from 'typeorm';
import getDefaultLanguage from './utils/get-default-language';

export class AddTableStoryTranslationAndMigrateValues1611555251951
  implements MigrationInterface {
  private translationTableName = 'story_translation';
  private migratedTableName = 'story';
  private migrationColumn = new TableColumn({
    name: 'content',
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
            name: 'story_id',
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
        name: 'IDXstoryTranslationStoryId',
        columnNames: ['story_id'],
      }),
    );
    await queryRunner.createIndex(
      this.translationTableName,
      new TableIndex({
        name: 'IDXstoryTranslationLanguageId',
        columnNames: ['language_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.translationTableName,
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: 'FKstoryTranslationToLanguage',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.translationTableName,
      new TableForeignKey({
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: 'FKstoryTranslationToStory',
        onDelete: 'CASCADE',
      }),
    );

    const language = await getDefaultLanguage(queryRunner);
    const stories = await queryRunner.query(
      `SELECT \`id\`, \`content\` FROM \`${this.migratedTableName}\``,
    );

    for (const story of stories) {
      await queryRunner.query(
        `INSERT INTO \`${this.translationTableName}\` (\`story_id\`, \`language_id\`, \`content\`) VALUES (?, ?, ?)`,
        [story.id, language.id, story.content],
      );
    }

    await queryRunner.dropColumn(this.migratedTableName, this.migrationColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const language = await getDefaultLanguage(queryRunner);
    const stories = await queryRunner.query(
      `SELECT \`story_id\`, \`content\` FROM \`${this.translationTableName}\` WHERE \`language_id\` = ${language.id}`,
    );

    await queryRunner.addColumn(this.migratedTableName, this.migrationColumn);

    for (const story of stories) {
      await queryRunner.query(
        `UPDATE \`${this.migratedTableName}\` SET \`content\` = ? WHERE id = ?`,
        [story.content, story.story_id],
      );
    }

    await queryRunner.dropTable(this.translationTableName);
  }
}
