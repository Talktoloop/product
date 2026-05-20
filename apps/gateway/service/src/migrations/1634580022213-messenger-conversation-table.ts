import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class messengerConversationTable1634580022213
  implements MigrationInterface {
  private tableName = 'messenger_conversation';
  private foreignKeyLanguageId = 'FKmessengerConversationToLanguage';
  private foreignKeyCountryId = 'FKmessengerConversationToCountry';
  private foreignKeyStoryId = 'FKmessengerConversationToStory';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'story_uuid',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'sender_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'user_first_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'user_last_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'oryginal_story',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'additional_info',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'country_code',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'share_user_info',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'language_id',
            type: 'smallint',
            isNullable: true,
            length: '2',
          },
          {
            name: 'country_id',
            type: 'smallint',
            isNullable: true,
          },
          {
            name: 'story_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'story_type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'gender',
            type: 'smallint',
            isNullable: true,
          },
          {
            name: 'started_at',
            type: 'datetime',
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
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'language',
        name: this.foreignKeyLanguageId,
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['country_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'country',
        name: this.foreignKeyCountryId,
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: this.foreignKeyStoryId,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyLanguageId);
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCountryId);
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyStoryId);
    await queryRunner.dropTable(this.tableName);
  }
}
