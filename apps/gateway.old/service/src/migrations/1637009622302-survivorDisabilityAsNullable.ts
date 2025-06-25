import { MigrationInterface, QueryRunner } from 'typeorm';

export class SurvivorDisabilityAsNullable1637009622302
  implements MigrationInterface {
  private tableName = 'case_sync_survivor_disability';
  private columName = 'survivor_disability';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY ${this.columName} varchar(100) null`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY ${this.columName} varchar(100) not null`,
    );
  }
}
