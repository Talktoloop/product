import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTimestampForReturnToLoop1636148619861
  implements MigrationInterface
{
  private tableName = 'story';
  private newColumn = new TableColumn({
    name: 'case_manager_returned_at',
    type: 'datetime',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
