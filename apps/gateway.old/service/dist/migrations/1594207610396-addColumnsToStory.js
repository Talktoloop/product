"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnsToStory1594207610396 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnsToStory1594207610396 {
    constructor() {
        this.tableName = 'story';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'status',
                type: 'int',
                isNullable: false,
                default: 0,
            }),
            new typeorm_1.TableColumn({
                name: 'email',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.newColumns);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.AddColumnsToStory1594207610396 = AddColumnsToStory1594207610396;
//# sourceMappingURL=1594207610396-addColumnsToStory.js.map