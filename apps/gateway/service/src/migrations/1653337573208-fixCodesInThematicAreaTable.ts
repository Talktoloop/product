import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixCodesInThematicAreaTable1653337573208
  implements MigrationInterface
{
  tableName = 'thematic';
  newCode = ['logistic', 'hiv/Aids', 'personWithDisabilities'];
  oldCode = ['logistics', 'hivAids', 'personWithDisabiltiies'];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const operations = [];

    for (let index = 0; index < this.newCode.length; index++) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`,
          [this.newCode[index], this.oldCode[index]],
        ),
      );
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const operations = [];

    for (let index = 0; index < this.newCode.length; index++) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`,
          [this.oldCode[index], this.newCode[index]],
        ),
      );
    }

    await Promise.all(operations);
  }
}
