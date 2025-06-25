import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddS3FileIdColumnToCommentTable1650395494080
  implements MigrationInterface
{
  tableName = 'comment';
  newColumn = new TableColumn({
    name: 's3_file_id',
    type: 'varchar',
    length: '100',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
