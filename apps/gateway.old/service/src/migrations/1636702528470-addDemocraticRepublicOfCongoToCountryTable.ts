import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDemocraticRepublicOfCongoToCountryTable1636702528470
  implements MigrationInterface {
  private tableName = 'country';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.query(
        `INSERT INTO \`${this.tableName}\` (\`prefix\`, \`code\`, \`name\`) VALUES (?, ?, ?)`,
        [243, 'cd', 'Democratic Republic of the Congo'],
      ),
      queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`name\` = ? WHERE code = ?`,
        ['Republic of the Congo', 'cg'],
      ),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE code = ?`, [
        'cd',
      ]),
      queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`name\` = ? WHERE code = ?`,
        ['Congo', 'cg'],
      ),
    ]);
  }
}
