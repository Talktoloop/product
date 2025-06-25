import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTableTitleExtendedForDifficulty1601924100424
  implements MigrationInterface {
  private tableName = 'difficulty';

  private updateTitle = [
    {
      id: 4,
      newTitle: 'Remembering',
    },
    {
      id: 5,
      newTitle: 'Self-Care e.g. washing',
    },
    {
      id: 6,
      newTitle: 'Communicating',
    },
  ];

  private newColumn = new TableColumn({
    name: 'title_extended',
    type: 'varchar',
    length: '150',
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.updateTitle.map(
        async (update) =>
          await queryRunner.query(
            `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`,
            [update.newTitle, update.id],
          ),
      ),
    );

    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
