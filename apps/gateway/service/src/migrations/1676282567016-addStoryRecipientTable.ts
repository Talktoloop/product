import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddStoryRecipientTable1676282567016 implements MigrationInterface {
  tableName = 'story_recipient';

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
            name: 'email',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'nickname',
            type: 'varchar',
            length: '300',
            isNullable: true,
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '300',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '300',
            isNullable: true,
          },
          {
            name: 'gender_by_user',
            type: 'varchar',
            length: '500',
            isNullable: true,
          },
          {
            name: 'gender_by_moderator',
            type: 'tinyint',
            isNullable: true,
          },
          {
            name: 'age_by_user',
            type: 'varchar',
            length: '500',
            isNullable: true,
          },
          {
            name: 'age_by_moderator',
            type: 'tinyint',
            isNullable: true,
          },
          {
            name: 'difficulty_by_user',
            type: 'varchar',
            length: '500',
            isNullable: true,
          },
          {
            name: 'difficulty_by_moderator',
            type: 'tinyint',
            isNullable: true,
          },
          {
            name: 'communicator_id',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'user_want_contact',
            type: 'tinyint',
            length: '1',
            isNullable: true,
            default: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
