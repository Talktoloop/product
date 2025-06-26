"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserOrganisationApplicationTable1685450556738 = void 0;
const typeorm_1 = require("typeorm");
class AddUserOrganisationApplicationTable1685450556738 {
    constructor() {
        this.tableName = 'user_organisation_application';
        this.foreignKeyUserId = 'fkUserOrganisationApplicationToUser';
        this.indexUserId = 'idxUserOrganisationApplicationUserId';
        this.foreignKeyOrganisationId = 'fkUserOrganisationApplicationToOrganisation';
        this.indexOrganisationId = 'idxUserOrganisationApplicationOrganisationId';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexUserId,
            columnNames: ['user_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexOrganisationId,
            columnNames: ['organisation_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['organisation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'organisation',
            name: this.foreignKeyOrganisationId,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyUserId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyOrganisationId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddUserOrganisationApplicationTable1685450556738 = AddUserOrganisationApplicationTable1685450556738;
//# sourceMappingURL=1685450556738-addUserOrganisationApplicationTable.js.map