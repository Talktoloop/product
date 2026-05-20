import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUnknownCountryToCountryTable1665137969221
  implements MigrationInterface
{
  tableName = 'country';
  code = 'un';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`prefix\`, \`code\`, \`name\`) VALUES (?, ?, ?)`,
      [0, this.code, 'Unknown'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      [this.code],
    );
  }
}
