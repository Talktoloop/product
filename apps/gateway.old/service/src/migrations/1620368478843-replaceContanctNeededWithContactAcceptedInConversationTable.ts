import { MigrationInterface, QueryRunner } from 'typeorm';

export class replaceContanctNeededWithContactAcceptedInConversationTable1620368478843
  implements MigrationInterface {
  private tableName = 'conversation';
  private oldColumnName = 'contact_needed';
  private newColumnName = 'contact_accepted';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` RENAME COLUMN ${this.oldColumnName} TO ${this.newColumnName};`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` RENAME COLUMN ${this.newColumnName} TO ${this.oldColumnName};`,
    );
  }
}
