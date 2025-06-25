import { MigrationInterface, QueryRunner } from 'typeorm';
import { REJECT_REASON_CODE } from '../common/types';

export class AddRejectReasonDefinition1645739639418
  implements MigrationInterface
{
  tableName = 'reject_reason';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`) VALUES (?)`,
      [REJECT_REASON_CODE.POOR_AUDIO_QUALITY],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      [REJECT_REASON_CODE.POOR_AUDIO_QUALITY],
    );
  }
}
