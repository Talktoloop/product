import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
} from 'typeorm';

export class AddCognitoSubToUserTable1780000000000
  implements MigrationInterface
{
  private tableName = 'user';
  private indexName = 'IDX_user_cognito_sub_id';
  private newColumn = new TableColumn({
    name: 'cognito_sub_id',
    type: 'varchar',
    length: '36',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    // Backfill: existing rows keep their current id as the cognito sub
    // (id is currently the Cognito sub). This is updated to the new pool's
    // subs at cutover.
    await queryRunner.query('UPDATE `user` SET `cognito_sub_id` = `id`');

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexName,
        columnNames: ['cognito_sub_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(this.tableName, this.indexName);
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
