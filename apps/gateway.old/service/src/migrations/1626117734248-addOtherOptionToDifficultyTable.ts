import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOtherOptionToDifficultyTable1626117734248
  implements MigrationInterface {
  private tableName = 'difficulty';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`) VALUES (?)`,
      ['other'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['other'],
    );
  }
}
