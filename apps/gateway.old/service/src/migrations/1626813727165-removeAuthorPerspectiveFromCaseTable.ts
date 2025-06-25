import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveAuthorPerspectiveFromCaseTable1626813727165
  implements MigrationInterface {
  private tableName = 'case_sync';
  private column = new TableColumn({
    name: 'author_perspective',
    type: 'varchar',
    length: '400',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }
}
