"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableDifficulty1594330526444 = void 0;
const typeorm_1 = require("typeorm");
class AddTableDifficulty1594330526444 {
    constructor() {
        this.tableName = 'difficulty';
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
exports.AddTableDifficulty1594330526444 = AddTableDifficulty1594330526444;
//# sourceMappingURL=1594330526444-addTableDifficulty.js.map