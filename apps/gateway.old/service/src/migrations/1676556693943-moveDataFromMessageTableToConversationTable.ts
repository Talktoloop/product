import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class MoveDataFromMessageTableToConversationTable1676556693943
  implements MigrationInterface
{
  table = 'conversation';
  column = new TableColumn({
    name: 'is_story',
    type: 'boolean',
    isNullable: false,
    default: false,
  });
  columns = [
    new TableColumn({
      name: 'language_id',
      type: 'smallint',
      length: '2',
      isNullable: true,
    }),
    new TableColumn({
      name: 'provider',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
    new TableColumn({
      name: 'service_number',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
    new TableColumn({
      name: 'story_id',
      type: 'varchar',
      length: '36',
      isNullable: true,
    }),
  ];
  foreignKeyLanguageId = 'FKmessageToLanguage';
  foreignKeyStoryId = 'FKmessageToStory';
  foreignKeyCountryId = 'FKconversationToCountry';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const data = await queryRunner.query(
      `SELECT language_id, conversation_id, provider, recipient, story_id FROM \`message\` WHERE story_id IS NOT NULL`,
    );

    await queryRunner.addColumn('message', this.column);
    await queryRunner.addColumns(this.table, this.columns);

    for (const item of data) {
      await queryRunner.query(
        `UPDATE \`${this.table}\` SET \`language_id\` = ?, \`provider\` = ?, \`service_number\` = ?, \`story_id\` = ? WHERE id = ?`,
        [
          item.language_id,
          item.provider,
          item.recipient,
          item.story_id,
          item.conversation_id,
        ],
      );
    }

    await queryRunner.dropForeignKey('message', this.foreignKeyLanguageId);
    await queryRunner.dropForeignKey('message', this.foreignKeyStoryId);

    await queryRunner.query(
      `UPDATE \`message\` SET \`is_story\` = true WHERE story_id IS NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`message\` 
        DROP COLUMN language_id,
        DROP COLUMN provider,
        DROP COLUMN recipient,
        DROP COLUMN sender,
        DROP COLUMN story_id`,
    );

    await queryRunner.dropForeignKey('conversation', this.foreignKeyCountryId);

    await queryRunner.query(
      `ALTER TABLE \`conversation\` DROP COLUMN country_id`,
    );

    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: 'FKconversationToLanguage',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: 'FKconversationToStory',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'conversation',
      'FKconversationToLanguage',
    );
    await queryRunner.dropForeignKey('conversation', 'FKconversationToStory');
    await queryRunner.addColumns('message', [
      new TableColumn({
        name: 'recipient',
        type: 'varchar',
        length: '100',
        isNullable: true,
      }),
      new TableColumn({
        name: 'sender',
        type: 'varchar',
        length: '100',
        isNullable: true,
      }),
      new TableColumn({
        name: 'language_id',
        type: 'smallint',
        length: '2',
        isNullable: true,
      }),
      new TableColumn({
        name: 'provider',
        type: 'varchar',
        length: '100',
        isNullable: true,
      }),
      new TableColumn({
        name: 'story_id',
        type: 'varchar',
        length: '255',
        isNullable: true,
      }),
    ]);
    await queryRunner.addColumn(
      'conversation',
      new TableColumn({
        name: 'country_id',
        type: 'smallint',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'message',
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: this.foreignKeyLanguageId,
      }),
    );
    await queryRunner.createForeignKey(
      'message',
      new TableForeignKey({
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: this.foreignKeyStoryId,
        onDelete: 'SET NULL',
      }),
    );
    await queryRunner.createForeignKey(
      'conversation',
      new TableForeignKey({
        columnNames: ['country_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'country',
        name: this.foreignKeyCountryId,
      }),
    );

    const data = await queryRunner.query(
      `SELECT c.id, c.language_id, c.provider, c.service_number, c.story_id, s.country_id FROM \`conversation\` c JOIN \`story\` s ON c.story_id = s.id`,
    );

    for (const item of data) {
      await queryRunner.query(
        `UPDATE \`message\` SET \`language_id\` = ?, \`provider\` = ? WHERE conversation_id = ?`,
        [item.language_id, item.provider, item.id],
      );

      await queryRunner.query(
        `UPDATE \`message\` SET \`sender\` = ? WHERE conversation_id = ? AND is_user = 0`,
        [item.service_number, item.id],
      );

      await queryRunner.query(
        `UPDATE \`message\` SET \`recipient\` = ? WHERE conversation_id = ? AND is_user = 1`,
        [item.service_number, item.id],
      );

      await queryRunner.query(
        `UPDATE \`message\` SET \`story_id\` = ? WHERE is_story = true AND conversation_id = ?`,
        [item.story_id, item.id],
      );

      await queryRunner.query(
        `UPDATE \`conversation\` SET \`country_id\` = ? WHERE id = ?`,
        [item.country_id, item.id],
      );
    }

    await queryRunner.query(
      `ALTER TABLE \`conversation\` 
        DROP COLUMN language_id,
        DROP COLUMN provider,
        DROP COLUMN service_number,
        DROP COLUMN story_id`,
    );

    await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN is_story`);
  }
}
