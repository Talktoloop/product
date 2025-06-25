import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameConversationTableToStoryCommunicatorConversationTable1677834188559
  implements MigrationInterface
{
  oldTableName = 'conversation';
  newTableName = 'story_communicator_conservation';

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
