import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddMessageTable1618602390843 implements MigrationInterface {
  private tableName = 'message';
  private foreignKeyLanguageId = 'FKmessageToLanguage';
  private foreignKeyStoryId = 'FKmessageToStory';
  private foreignKeyConversationId = 'FKmessageToConversation';

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
            name: 'conversation_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'language_id',
            type: 'smallint',
            length: '2',
          },
          {
            name: 'content',
            type: 'varchar',
            length: '500',
          },
          {
            name: 'provider',
            type: 'enum',
            enum: ['africastalking'],
            enumName: 'providerEnum',
          },
          {
            name: 'sender',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'recipient',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'story_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'is_user',
            type: 'boolean',
            default: true,
          },
          {
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
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
        name: 'IDXmessageLanguageId',
        columnNames: ['language_id'],
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
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: this.foreignKeyStoryId,
        onDelete: 'SET NULL',
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conversation',
        name: this.foreignKeyConversationId,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyLanguageId);
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyStoryId);
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyConversationId,
    );
    await queryRunner.dropTable(this.tableName);
  }
}
