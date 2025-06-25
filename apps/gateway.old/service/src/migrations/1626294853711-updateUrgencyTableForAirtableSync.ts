import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUrgencyTableForAirtableSync1626294853711
  implements MigrationInterface {
  private tableName = 'case_sync';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY urgency varchar(100) null`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY urgency varchar(100)`,
    );
  }
}
