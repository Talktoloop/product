import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableLanguageWithDefaultValue1611554285956
  implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'smallint',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'code',
            type: 'varchar',
            length: '2',
          },
          {
            name: 'is_default',
            type: 'boolean',
            default: false,
          },
        ],
      }),
      true,
    );
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`) VALUES ('en', 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
