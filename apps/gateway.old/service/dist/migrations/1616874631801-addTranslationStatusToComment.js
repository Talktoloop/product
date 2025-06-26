"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTranslationStatusToComment1616874631801 = void 0;
const typeorm_1 = require("typeorm");
class AddTranslationStatusToComment1616874631801 {
    constructor() {
        this.tableName = 'comment_translation';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'status',
            type: 'tinyint',
            default: 2,
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddTranslationStatusToComment1616874631801 = AddTranslationStatusToComment1616874631801;
//# sourceMappingURL=1616874631801-addTranslationStatusToComment.js.map