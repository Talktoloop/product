"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTablePregnancyStatus1594330526444 = void 0;
const typeorm_1 = require("typeorm");
class AddTablePregnancyStatus1594330526444 {
    constructor() {
        this.tableName = 'pregnancy_status';
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
exports.AddTablePregnancyStatus1594330526444 = AddTablePregnancyStatus1594330526444;
//# sourceMappingURL=1594330526444-addTablePregnancyStatus.js.map