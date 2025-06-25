import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUserNicknameToUserTable1595073350880
  implements MigrationInterface {
  private tableName = 'user';

  private newColumnNickname = new TableColumn({
    name: 'nickname',
    type: 'varchar',
    length: '60',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumnNickname);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumnNickname);
  }
}
