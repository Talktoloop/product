import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOtherRejectReason1617310778926 implements MigrationInterface {
  private tableName = 'reject_reason';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`) VALUES ('other')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = 'other'`,
    );
  }
}
