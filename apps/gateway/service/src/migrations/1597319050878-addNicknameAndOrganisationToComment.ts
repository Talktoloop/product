import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddNicknameAndOrganisationToComment1597319050878
  implements MigrationInterface {
  private tableName = 'comment';
  private newColumns = [
    new TableColumn({
      name: 'nickname',
      type: 'varchar',
      length: '60',
      isNullable: true,
    }),
    new TableColumn({
      name: 'organisation',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.newColumns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.newColumns);
  }
}
