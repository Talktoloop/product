import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addOrderToCategoryTable1630349179509
  implements MigrationInterface {
  private tableName = 'category';
  private newColumn = new TableColumn({
    name: 'order',
    type: 'smallint',
    length: '2',
  });
  private order = {
    thanks: 1,
    question: 2,
    opinion: 3,
    suggestion: 4,
    concern: 5,
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    const operations = [];

    for (const [key, value] of Object.entries(this.order)) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`order\` = ? WHERE \`code\` = ?`,
          [value, key],
        ),
      );
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
