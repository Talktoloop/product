import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class addSubscriptionTable1688713597608 implements MigrationInterface {
  tableName1 = 'user_token';
  tableName2 = 'organisation_token';
  foreignKeyUserId = 'fkUserTokenToUser';
  indexUserId = 'idxUserTokenUserId';
  foreignKeyOrganisationId = 'fkOrganisationTokenToOrganisation';
  indexOrganisationId = 'idxOrganisationTokenOrganisationId';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName1,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'token',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      this.tableName1,
      new TableIndex({
        name: this.indexUserId,
        columnNames: ['user_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName1,
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: this.foreignKeyUserId,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: this.tableName2,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'token',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'organisation_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      this.tableName2,
      new TableIndex({
        name: this.indexOrganisationId,
        columnNames: ['organisation_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName2,
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
    await queryRunner.dropForeignKey(this.tableName1, this.foreignKeyUserId);
    await queryRunner.dropForeignKey(
      this.tableName2,
      this.foreignKeyOrganisationId,
    );
    await queryRunner.dropTable(this.tableName1);
    await queryRunner.dropTable(this.tableName2);
  }
}
