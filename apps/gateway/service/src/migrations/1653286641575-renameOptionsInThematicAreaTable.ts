import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameOptionsInThematicAreaTable1653286641575
  implements MigrationInterface
{
  tableName = 'thematic';
  options = {
    hospitals: 'medicalCentres',
    epidemics: 'epidemics/Pandemics',
    'campCoordination/Management': 'campCoordinationManagement',
    campManagement: 'campCoordinationManagement',
    lighting: 'lightingAndElectricity',
    university: 'university/Colleges/Trades',
    other: 'governance',
    financeManagement: 'finance',
    government: 'civicSpace',
    security: 'safetyAndSecurity',
    foodAssistance: 'feeding/Malnutrition',
    training: 'capacityBuilding',
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    const operations = [];

    for (const [oldValue, newValue] of Object.entries(this.options)) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE code = ?`,
          [newValue, oldValue],
        ),
      );
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const operations = [];

    for (const [oldValue, newValue] of Object.entries(this.options)) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE code = ?`,
          [oldValue, newValue],
        ),
      );
    }

    await Promise.all(operations);
  }
}
