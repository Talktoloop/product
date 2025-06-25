import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveMinorityGroupFromThematicTable1731606311000 implements MigrationInterface {
  private tableName = 'thematic';
  private thematicId = 86;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM ${this.tableName} WHERE id = ${this.thematicId}`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO ${this.tableName} (id, parent_thematic_id, code) VALUES (${this.thematicId}, 67, 'minorityGroup')`
    );
  }
}
