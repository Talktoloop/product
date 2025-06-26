"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPhoneToCommentTable1622113708565 = void 0;
const typeorm_1 = require("typeorm");
class AddPhoneToCommentTable1622113708565 {
    constructor() {
        this.tableName = 'comment';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddPhoneToCommentTable1622113708565 = AddPhoneToCommentTable1622113708565;
//# sourceMappingURL=1622113708565-addPhoneToCommentTable.js.map