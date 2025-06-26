"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAuthorPerspectiveFromCaseTable1626813727165 = void 0;
const typeorm_1 = require("typeorm");
class RemoveAuthorPerspectiveFromCaseTable1626813727165 {
    constructor() {
        this.tableName = 'case_sync';
        this.column = new typeorm_1.TableColumn({
            name: 'author_perspective',
            type: 'varchar',
            length: '400',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
}
exports.RemoveAuthorPerspectiveFromCaseTable1626813727165 = RemoveAuthorPerspectiveFromCaseTable1626813727165;
//# sourceMappingURL=1626813727165-removeAuthorPerspectiveFromCaseTable.js.map