import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeAllegationOrganizationLengthInCaseSyncTable1642485761154
  implements MigrationInterface {
  private tableName = 'case_sync';
  private columnName = 'allegation_organization';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(1000)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(50)`,
    );
  }
}
