import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetNullableForNameInCountryAdministrativeDataTable1684344491628
  implements MigrationInterface
{
  private tableName = 'country_administrative_area';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY name varchar(150)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY name varchar(150) NOT NULL;`,
    );
  }
}
