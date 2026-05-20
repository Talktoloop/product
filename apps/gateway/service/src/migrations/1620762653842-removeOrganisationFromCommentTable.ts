import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class removeOrganisationFromCommentTable1620762653842
  implements MigrationInterface {
  private tableName = 'comment';
  private columnName = 'organisation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.columnName);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: this.columnName,
        type: 'varchar',
        length: '100',
        isNullable: true,
      }),
    );
  }
}
