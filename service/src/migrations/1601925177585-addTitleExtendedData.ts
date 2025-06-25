import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTitleExtendedData1601925177585 implements MigrationInterface {
  private tableName = 'difficulty';
  private newColumn = new TableColumn({
    name: 'title_extended',
    type: 'varchar',
    length: '150',
    isNullable: false,
  });

  private titleExtendData = [
    {
      id: 1,
      titleExtended: 'Difficulty seeing, even if wearing glasses',
    },
    {
      id: 2,
      titleExtended: 'Difficulty hearing, even if using a hearing aid',
    },
    {
      id: 3,
      titleExtended: 'Difficulty walking or climbing steps',
    },
    {
      id: 4,
      titleExtended: 'Difficulty remembering or concentrating',
    },
    {
      id: 5,
      titleExtended: 'Difficulty with self-care, such as washing or dressing',
    },
    {
      id: 6,
      titleExtended: 'Difficulty communicating when using your mother tongue',
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await Promise.all(
        this.titleExtendData.map(
          async (update) =>
            await queryRunner.query(
              `UPDATE \`${this.tableName}\` SET \`title_extended\` = ? WHERE id = ?`,
              [update.titleExtended, update.id],
            ),
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
