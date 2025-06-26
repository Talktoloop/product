"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddS3FileIdColumnToCommentTable1650395494080 = void 0;
const typeorm_1 = require("typeorm");
class AddS3FileIdColumnToCommentTable1650395494080 {
    constructor() {
        this.tableName = 'comment';
        this.newColumn = new typeorm_1.TableColumn({
            name: 's3_file_id',
            type: 'varchar',
            length: '100',
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
exports.AddS3FileIdColumnToCommentTable1650395494080 = AddS3FileIdColumnToCommentTable1650395494080;
//# sourceMappingURL=1650395494080-addS3FileIdColumnToCommentTable.js.map