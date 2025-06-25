import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsToStory1594207610396 implements MigrationInterface {
  private tableName = 'story';
  private newColumns = [
    new TableColumn({
      name: 'status',
      type: 'int',
      isNullable: false,
      default: 0,
    }),
    new TableColumn({
      name: 'email',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
  ];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.newColumns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.newColumns);
  }
}
