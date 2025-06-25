import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CodeInsteadOfTitleInCategoryTable1612170500907
  implements MigrationInterface {
  private categories = [
    { code: 'thanks', title: 'Thanks' },
    { code: 'question', title: 'Question' },
    { code: 'opinion', title: 'Opinion' },
    { code: 'concern', title: 'Concern' },
    { code: 'suggestion', title: 'Suggestion' },
  ];
  private tableName = 'category';
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

    for (const category of this.categories) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE title = ?`,
        [category.code, category.title],
      );
    }

    await queryRunner.dropColumn(this.tableName, this.oldColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.oldColumn);

    for (const category of this.categories) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE code = ?`,
        [category.title, category.code],
      );
    }
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
