import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddThematicAreas1730293871309 implements MigrationInterface {
  private tableName = 'thematic';

  //existing thematic categories
  private readonly crossCuttingThematic = 'cross-cutting';
  private readonly governanceThematic = 'governance';
  private readonly healthThematic = 'health';
  private readonly protectionThematic = 'protection';
  private readonly washThematic = 'wash';
  private readonly educationThematic = 'education';

  // thematic with new parent
  private readonly newEducationThematics = [
    'informationEducationAndCommunicationActivities',
  ];

  private readonly newHealthThematics = [
    'quarantineFacilities',
    'vaccines',
    'insurance',
  ];

  private readonly newWashThematics = [
    'hygienicPracticesCommunityDisinfection',
  ];

  private readonly newProtectionThematics = [
    'landRights',
    'landmines/UnexplodedOrdinance',
  ];

  private readonly newGovernanceThematics = ['transportation'];

  private readonly newCrossCuttingThematics = ['droughts', 'laborAndJobs'];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const crossCuttingCategory = await queryRunner.query(
      `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
      [this.crossCuttingThematic],
    );

    const governanceCategory = await queryRunner.query(
      `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
      [this.governanceThematic],
    );

    const healthCategory = await queryRunner.query(
      `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
      [this.healthThematic],
    );

    const protectionCategory = await queryRunner.query(
      `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
      [this.protectionThematic],
    );

    const washCategory = await queryRunner.query(
      `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
      [this.washThematic],
    );

    const educationCategory = await queryRunner.query(
      `SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`,
      [this.educationThematic],
    );

    if (healthCategory.length > 0) {
      const healthCategoryId = healthCategory[0].id;
      this.newHealthThematics.map((thematic, index) => {
        queryRunner.query(
          `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
          [thematic, index + 1, healthCategoryId],
        );
      });
    }

    if (washCategory.length > 0) {
      const washCategoryId = washCategory[0].id;
      this.newWashThematics.map((thematic, index) => {
        queryRunner.query(
          `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
          [thematic, index + 1, washCategoryId],
        );
      });
    }

    if (protectionCategory.length > 0) {
      const protectionCategoryId = protectionCategory[0].id;
      this.newProtectionThematics.map((thematic, index) => {
        queryRunner.query(
          `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
          [thematic, index + 1, protectionCategoryId],
        );
      });
    }

    if (governanceCategory.length > 0) {
      const governanceCategoryId = governanceCategory[0].id;
      this.newGovernanceThematics.map((thematic, index) => {
        queryRunner.query(
          `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
          [thematic, index + 1, governanceCategoryId],
        );
      });
    }

    if (crossCuttingCategory.length > 0) {
      const crossCuttingCategoryId = crossCuttingCategory[0].id;
      this.newCrossCuttingThematics.map((thematic, index) => {
        queryRunner.query(
          `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
          [thematic, index + 1, crossCuttingCategoryId],
        );
      });
    }

    if (educationCategory.length > 0) {
      const educationCategoryId = educationCategory[0].id;
      this.newEducationThematics.map((thematic, index) => {
        queryRunner.query(
          `INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`,
          [thematic, index + 1, educationCategoryId],
        );
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const allNewThematics = [
      ...this.newHealthThematics,
      ...this.newWashThematics,
      ...this.newProtectionThematics,
      ...this.newGovernanceThematics,
      ...this.newCrossCuttingThematics,
      ...this.newEducationThematics
    ];

    await queryRunner.query(
      `DELETE FROM ${this.tableName} WHERE code IN (${allNewThematics
        .map(() => '?')
        .join(', ')})`,
      allNewThematics,
    );
  }
}
