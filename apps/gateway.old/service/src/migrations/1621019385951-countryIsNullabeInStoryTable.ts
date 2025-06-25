import { MigrationInterface, QueryRunner } from 'typeorm';

export class countryIsNullabeInStoryTable1621019385951
  implements MigrationInterface {
  private tableName = 'story';
  private columnName = 'country';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` varchar(3) NULL DEFAULT NULL;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` varchar(3) NOT NULL DEFAULT '';`,
    );
  }
}
