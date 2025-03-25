import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddRoleToUserTable1595882499755 implements MigrationInterface {
  private tableName = 'user';

  private newColumn = new TableColumn({
    name: 'role',
    type: 'int',
    isNullable: false,
    default: 0,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
