"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableThematic1594665865439 = void 0;
const typeorm_1 = require("typeorm");
class AddTableThematic1594665865439 {
    constructor() {
        this.tableName = 'thematic';
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
exports.AddTableThematic1594665865439 = AddTableThematic1594665865439;
//# sourceMappingURL=1594665865439-AddTableThematic.js.map