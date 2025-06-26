"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableCaseSyncAuthorPerspective1626811054192 = void 0;
const typeorm_1 = require("typeorm");
class AddTableCaseSyncAuthorPerspective1626811054192 {
    constructor() {
        this.tableName = 'case_sync_author_perspective';
        this.foreignKeyUserId = 'FK_authorPerspectiveToCase';
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
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: 'IDX_authorPerspectiveCaseId',
            columnNames: ['case_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['case_id'],
            referencedColumnNames: ['case_uuid'],
            referencedTableName: 'case_sync',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.query(`INSERT INTO ${this.tableName} (\`case_id\`, \`author_perspective\`)
      SELECT case_uuid, author_perspective FROM case_sync WHERE author_perspective IS NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableCaseSyncAuthorPerspective1626811054192 = AddTableCaseSyncAuthorPerspective1626811054192;
//# sourceMappingURL=1626811054192-addTableCaseSyncAuthorPerspective.js.map