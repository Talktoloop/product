import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CodeInsteadOfTitleInPregnancyStatusTable1612173607807
  implements MigrationInterface {
  private statuses = [
    {
      code: 'notPregnantOrBreastfeeding',
      title: 'Not pregnant or breastfeeding',
    },
    { code: 'pregnant', title: 'Pregnant' },
    { code: 'breastfeeding', title: 'Breastfeeding' },
    {
      code: 'bothPregnantAndBreastfeeding',
      title: 'Both pregnant and breastfeeding',
    },
    { code: 'notDisclosed', title: 'Not disclosed' },
  ];
  private tableName = 'pregnancy_status';
  private newColumn = new TableColumn({
    name: 'code',
    type: 'varchar',
    length: '100',
  });
  private oldColumn = new TableColumn({
    name: 'title',
    type: 'varchar',
    length: '100',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    for (const status of this.statuses) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE title = ?`,
        [status.code, status.title],
      );
    }

    await queryRunner.dropColumn(this.tableName, this.oldColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.oldColumn);

    for (const status of this.statuses) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE code = ?`,
        [status.title, status.code],
      );
    }
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
