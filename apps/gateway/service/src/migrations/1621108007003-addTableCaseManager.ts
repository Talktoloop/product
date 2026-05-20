import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableCaseManager1621108007003 implements MigrationInterface {
  private tableName = 'case_manager';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'nickname',
            type: 'varchar',
            length: '30',
            isNullable: false,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            length: '6',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
