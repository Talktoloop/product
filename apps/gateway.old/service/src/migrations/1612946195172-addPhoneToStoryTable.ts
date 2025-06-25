import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPhoneToStoryTable1612946195172 implements MigrationInterface {
  private tableName = 'story';
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
