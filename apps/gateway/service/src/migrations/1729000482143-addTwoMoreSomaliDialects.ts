import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTwoMoreSomaliDialects1729000482143
  implements MigrationInterface
{
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?), (?, ?, ?)`,
      ['bju', null, 1, 'bnd', null, 1],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` IN (?, ?)`,
      ['bju', 'bnd'],
    );
  }
}
