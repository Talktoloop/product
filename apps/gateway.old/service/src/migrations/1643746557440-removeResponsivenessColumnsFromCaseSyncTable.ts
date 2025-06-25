import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveResponsivenessColumnsFromCaseSyncTable1643746557440
  implements MigrationInterface {
  private tableName = 'case_sync';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE \`${this.tableName}\` 
        DROP COLUMN process_and_refer_responsiveness, 
        DROP COLUMN referral_response_responsiveness, 
        DROP COLUMN investigation_responsiveness, 
        DROP COLUMN investigation_result_responsiveness, 
        DROP COLUMN informing_author_responsiveness
    `);
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
