import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddUserOrganisationApplicationTable1685450556738
  implements MigrationInterface
{
  tableName = 'user_organisation_application';
  foreignKeyUserId = 'fkUserOrganisationApplicationToUser';
  indexUserId = 'idxUserOrganisationApplicationUserId';
  foreignKeyOrganisationId = 'fkUserOrganisationApplicationToOrganisation';
  indexOrganisationId = 'idxUserOrganisationApplicationOrganisationId';

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
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'organisation_id',
            type: 'varchar',
            length: '36',
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
      true,
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexUserId,
        columnNames: ['user_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: this.foreignKeyUserId,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexOrganisationId,
        columnNames: ['organisation_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['organisation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'organisation',
        name: this.foreignKeyOrganisationId,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyUserId);
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyOrganisationId,
    );
    await queryRunner.dropTable(this.tableName);
  }
}
