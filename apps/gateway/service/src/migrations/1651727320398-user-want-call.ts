import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class userWantCall1651727320398 implements MigrationInterface {
  name = 'userWantCall1651727320398';

  private tableName = 'story';

  private newColumn = new TableColumn({
    name: 'user_want_contact',
    type: 'tinyint',
    length: '1',
    isNullable: false,
    default: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
