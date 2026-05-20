import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPhoneToCommentTable1622113708565 implements MigrationInterface {
  private tableName = 'comment';
  private newColumn = new TableColumn({
    name: 'phone',
    type: 'varchar',
    length: '20',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
