import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddTableCaseSyncAuthorPerspective1626811054192
  implements MigrationInterface {
  private tableName = 'case_sync_author_perspective';
  private foreignKeyUserId = 'FK_authorPerspectiveToCase';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'case_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'author_perspective',
            type: 'varchar',
            isNullable: false,
            length: '100',
          },
        ],
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: 'IDX_authorPerspectiveCaseId',
        columnNames: ['case_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['case_id'],
        referencedColumnNames: ['case_uuid'],
        referencedTableName: 'case_sync',
        name: this.foreignKeyUserId,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.query(
      `INSERT INTO ${this.tableName} (\`case_id\`, \`author_perspective\`)
      SELECT case_uuid, author_perspective FROM case_sync WHERE author_perspective IS NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
