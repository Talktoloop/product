"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableCategory1594201786285 = void 0;
const typeorm_1 = require("typeorm");
class AddTableCategory1594201786285 {
    constructor() {
        this.tableName = 'category';
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
                    name: 'title',
                    type: 'varchar',
                    length: '100',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableCategory1594201786285 = AddTableCategory1594201786285;
//# sourceMappingURL=1594201786285-addTableCategory.js.map