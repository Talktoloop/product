"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddConsentsColumnsToUserTable1688109681259 = void 0;
const typeorm_1 = require("typeorm");
class AddConsentsColumnsToUserTable1688109681259 {
    constructor() {
        this.tableName = 'user';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'terms_of_service_id',
                type: 'smallint',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'community_guidelines_id',
                type: 'smallint',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'privacy_policy_id',
                type: 'smallint',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'consents_date',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
        ];
        this.indexTermsOfServiceId = 'idxUserTermsOfServiceId';
        this.foreignKeyTermsOfServiceId = 'fkUserTermsOfServiceId';
        this.indexCommunityGuidelinesId = 'idxUserCommunityGuidelinesId';
        this.foreignKeyCommunityGuidelinesId = 'fkUserCommunityGuidelinesId';
        this.indexPrivacyPolicyId = 'idxUserPrivacyPolicyId';
        this.foreignKeyPrivacyPolicyId = 'fkUserPrivacyPolicyId';
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.columns);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexTermsOfServiceId,
            columnNames: ['terms_of_service_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['terms_of_service_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user_consent',
            name: this.foreignKeyTermsOfServiceId,
            onDelete: 'RESTRICT',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexCommunityGuidelinesId,
            columnNames: ['community_guidelines_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['community_guidelines_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user_consent',
            name: this.foreignKeyCommunityGuidelinesId,
            onDelete: 'RESTRICT',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexPrivacyPolicyId,
            columnNames: ['terms_of_service_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['terms_of_service_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user_consent',
            name: this.foreignKeyPrivacyPolicyId,
            onDelete: 'RESTRICT',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyTermsOfServiceId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCommunityGuidelinesId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyPrivacyPolicyId);
        await queryRunner.dropColumns(this.tableName, this.columns);
    }
}
exports.AddConsentsColumnsToUserTable1688109681259 = AddConsentsColumnsToUserTable1688109681259;
//# sourceMappingURL=1688109681259-addConsentsColumnsToUserTable.js.map