import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddThematicAreaData1601458481662 implements MigrationInterface {
  private tableName = 'thematic';

  private thematics = [
    {
      main: 'Emergency Response',
      data: [
        'ID Cards',
        'Camp Management',
        'Distribution',
        'Cash',
        'Food Items',
        'Non-Food Items',
      ],
    },
    {
      main: 'Health',
      data: [
        'Hospitals',
        'Nutrition',
        'Community Sensitisation',
        'Gender-Based Violence',
        'Mental Health',
        'Sexual and Reproductive Rights',
        'Epidemics',
        'COVID',
        'EBOLA',
      ],
    },
    {
      main: 'Food Security',
      data: ['Livelihoods', 'Cash', 'Training'],
    },
    {
      main: 'WASH',
      data: ['Water Points', 'Latrines'],
    },
    {
      main: 'Shelter',
      data: ['Housing', 'Lighting', 'Logistics', 'Construction'],
    },
    {
      main: 'Education',
      data: ['Primary', 'Secondary', 'University', 'Training'],
    },
    {
      main: 'Cross-Cutting',
      data: [
        'Cash',
        'Security',
        'Camp Coordination/Management',
        'Capacity Building',
        'Community Sensitisation',
        'Aid Workers',
      ],
    },
    {
      main: 'Other',
      data: ['Security', 'Finance Management', 'Government'],
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const queryManager = queryRunner.manager.createQueryBuilder();

    await queryManager.delete().from(this.tableName).execute();

    for (const thematic of this.thematics) {
      const mainTheme = await queryRunner.query(
        `INSERT INTO \`${this.tableName}\` (\`title\`) VALUES (?)`,
        [thematic.main],
      );

      const parentKey = mainTheme.insertId;

      await Promise.all(
        thematic.data.map(async (subThematic) => {
          await queryRunner.query(
            `INSERT INTO \`${this.tableName}\` (\`title\`, \`parent_thematic_id\`) VALUES (?, ?)`,
            [subThematic, parentKey],
          );
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable(this.tableName);
  }
}
