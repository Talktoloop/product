import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAlterTableWithFullTextName1685098575440
  implements MigrationInterface
{
  tableName = 'country_administrative_area_name';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE ${this.tableName} ADD FULLTEXT(name)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE ${this.tableName} DROP INDEX name`);
  }
}
