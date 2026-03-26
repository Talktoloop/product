import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddClanConflictThematicTag1735316073027 implements MigrationInterface {
  private tableName = 'thematic';
  private readonly protectionThematic = 'protection';
  private readonly newProtectionThematics = [
    'clan-conflict'
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const protectionCategory = await queryRunner.query(
      `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
      [this.protectionThematic],
    );

    if (protectionCategory.length > 0) {
      const protectionCategoryId = protectionCategory[0].id;

      // Get the current max order for rows under this parent
      const currentMaxOrder = await queryRunner.query(
        `SELECT MAX(\`order\`) as maxOrder FROM ${this.tableName} WHERE parent_thematic_id = ?`,
        [protectionCategoryId],
      );

      const order = currentMaxOrder[0]?.maxOrder + 1 || 0;
      this.newProtectionThematics.map((thematicTag, index) => {
        queryRunner.query(
          `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
          [thematicTag, order, protectionCategoryId],
        );
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const allNewThematics = [
      ...this.newProtectionThematics
    ];

    await queryRunner.query(
      `DELETE FROM ${this.tableName} WHERE code IN (${allNewThematics
        .map(() => '?')
        .join(', ')})`,
      allNewThematics,
    );
  }
}
