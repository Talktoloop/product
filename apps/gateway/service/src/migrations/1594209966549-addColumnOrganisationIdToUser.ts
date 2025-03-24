import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddColumnOrganisationIdToUser1594209966549
  implements MigrationInterface {
  private tableName = 'user';
  private indexOrganisationName = 'IDX_USER_ORGANISATION_ID';
  private fkOrganisationName = 'fk_OrganisationToUser';

  private newColumn = new TableColumn({
    name: 'organisation_id',
    type: 'varchar',
    length: '36',
    isNullable: true,
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.fkOrganisationName,
        columnNames: ['organisation_id'],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['organisation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'organisation',
        name: this.indexOrganisationName,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
