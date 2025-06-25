import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddConsentsColumnsToUserTable1688109681259
  implements MigrationInterface
{
  tableName = 'user';
  columns = [
    new TableColumn({
      name: 'terms_of_service_id',
      type: 'smallint',
      isNullable: true,
    }),
    new TableColumn({
      name: 'community_guidelines_id',
      type: 'smallint',
      isNullable: true,
    }),
    new TableColumn({
      name: 'privacy_policy_id',
      type: 'smallint',
      isNullable: true,
    }),
    new TableColumn({
      name: 'consents_date',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
  ];
  indexTermsOfServiceId = 'idxUserTermsOfServiceId';
  foreignKeyTermsOfServiceId = 'fkUserTermsOfServiceId';
  indexCommunityGuidelinesId = 'idxUserCommunityGuidelinesId';
  foreignKeyCommunityGuidelinesId = 'fkUserCommunityGuidelinesId';
  indexPrivacyPolicyId = 'idxUserPrivacyPolicyId';
  foreignKeyPrivacyPolicyId = 'fkUserPrivacyPolicyId';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.columns);
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexTermsOfServiceId,
        columnNames: ['terms_of_service_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['terms_of_service_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_consent',
        name: this.foreignKeyTermsOfServiceId,
        onDelete: 'RESTRICT',
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexCommunityGuidelinesId,
        columnNames: ['community_guidelines_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['community_guidelines_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_consent',
        name: this.foreignKeyCommunityGuidelinesId,
        onDelete: 'RESTRICT',
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexPrivacyPolicyId,
        columnNames: ['terms_of_service_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['terms_of_service_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_consent',
        name: this.foreignKeyPrivacyPolicyId,
        onDelete: 'RESTRICT',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyTermsOfServiceId,
    );
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyCommunityGuidelinesId,
    );
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyPrivacyPolicyId,
    );
    await queryRunner.dropColumns(this.tableName, this.columns);
  }
}
