import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixTypoInConversationTableName1693287102480
  implements MigrationInterface
{
  oldTableName = 'story_communicator_conservation';
  newTableName = 'story_communicator_conversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`,
    );
  }
}
