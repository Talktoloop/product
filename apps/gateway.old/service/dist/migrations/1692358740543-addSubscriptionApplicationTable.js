"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSubscriptionApplicationTable1692358740543 = void 0;
const typeorm_1 = require("typeorm");
class addSubscriptionApplicationTable1692358740543 {
    constructor() {
        this.tableName = 'subscription_application';
        this.foreignKeyUserId = 'fkSubsriptionApplicationToUser';
        this.indexUserId = 'idxSubsriptionApplicationUserId';
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
                    name: 'type',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'user_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'timestamp',
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
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyUserId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.addSubscriptionApplicationTable1692358740543 = addSubscriptionApplicationTable1692358740543;
//# sourceMappingURL=1692358740543-addSubscriptionApplicationTable.js.map