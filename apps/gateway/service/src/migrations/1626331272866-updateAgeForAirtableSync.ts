import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateAgeForAirTableSync1626331272866
  implements MigrationInterface {
  private tableName = 'case_sync';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY survivor_age varchar(10) null`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY survivor_age varchar(5) null`,
    );
  }
}
