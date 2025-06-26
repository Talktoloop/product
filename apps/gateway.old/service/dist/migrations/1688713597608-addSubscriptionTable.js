"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSubscriptionTable1688713597608 = void 0;
const typeorm_1 = require("typeorm");
class addSubscriptionTable1688713597608 {
    constructor() {
        this.tableName1 = 'user_token';
        this.tableName2 = 'organisation_token';
        this.foreignKeyUserId = 'fkUserTokenToUser';
        this.indexUserId = 'idxUserTokenUserId';
        this.foreignKeyOrganisationId = 'fkOrganisationTokenToOrganisation';
        this.indexOrganisationId = 'idxOrganisationTokenOrganisationId';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
        await queryRunner.createIndex(this.tableName1, new typeorm_1.TableIndex({
            name: this.indexUserId,
            columnNames: ['user_id'],
        }));
        await queryRunner.createForeignKey(this.tableName1, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
        await queryRunner.createIndex(this.tableName2, new typeorm_1.TableIndex({
            name: this.indexOrganisationId,
            columnNames: ['organisation_id'],
        }));
        await queryRunner.createForeignKey(this.tableName2, new typeorm_1.TableForeignKey({
            columnNames: ['organisation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'organisation',
            name: this.foreignKeyOrganisationId,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName1, this.foreignKeyUserId);
        await queryRunner.dropForeignKey(this.tableName2, this.foreignKeyOrganisationId);
        await queryRunner.dropTable(this.tableName1);
        await queryRunner.dropTable(this.tableName2);
    }
}
exports.addSubscriptionTable1688713597608 = addSubscriptionTable1688713597608;
//# sourceMappingURL=1688713597608-addSubscriptionTable.js.map