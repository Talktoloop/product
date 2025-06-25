import { MigrationInterface, QueryRunner } from 'typeorm';

export class GenderAsStringInMessengerConversationTable1656390433625
  implements MigrationInterface
{
  tableName = 'messenger_conversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` modify COLUMN \`gender\` varchar(500);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` modify COLUMN \`gender\` smallint;`,
    );
  }
}
