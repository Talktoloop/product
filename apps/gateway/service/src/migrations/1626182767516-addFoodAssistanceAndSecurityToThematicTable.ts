import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFoodAssistanceAndSecurityToThematicTable1626182767516
  implements MigrationInterface {
  private tableName = 'thematic';
  private items = [
    {
      parentCode: 'foodSecurity',
      code: 'foodAssistance',
    },
    {
      parentCode: 'other',
      code: 'security',
    },
  ];

  async getParents(
    queryRunner: QueryRunner,
  ): Promise<{ id: number; code: string }[]> {
    return queryRunner.query(
      `SELECT \`id\`, \`code\` FROM \`${this.tableName}\` WHERE \`code\` IN (?)`,
      [this.items.map((item) => item.parentCode)],
    );
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const parents = await this.getParents(queryRunner);
    const operations = [];

    for (const parent of parents) {
      operations.push(
        queryRunner.query(
          `INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`) VALUES (?, ?)`,
          [
            this.items.find((item) => item.parentCode === parent.code).code,
            parent.id,
          ],
        ),
      );
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const parents = await this.getParents(queryRunner);
    const operations = [];

    for (const parent of parents) {
      operations.push(
        queryRunner.query(
          `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ? AND parent_thematic_id = ?`,
          [
            this.items.find((item) => item.parentCode === parent.code).code,
            parent.id,
          ],
        ),
      );
    }

    await Promise.all(operations);
  }
}
