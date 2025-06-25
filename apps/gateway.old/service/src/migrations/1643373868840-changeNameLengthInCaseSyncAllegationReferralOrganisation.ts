import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeNameLengthInCaseSyncAllegationReferralOrganisation1643373868840
  implements MigrationInterface {
  private tableName = 'case_sync_allegation_referral_organisation';
  private columnName = 'name';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(200)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(50)`,
    );
  }
}
