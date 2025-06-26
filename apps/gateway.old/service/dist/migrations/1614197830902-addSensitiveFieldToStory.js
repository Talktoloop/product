"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSensitiveFieldToStory1614197830902 = void 0;
const typeorm_1 = require("typeorm");
class AddSensitiveFieldToStory1614197830902 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'isSensitive',
            type: 'tinyint',
            length: '1',
            isNullable: false,
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddSensitiveFieldToStory1614197830902 = AddSensitiveFieldToStory1614197830902;
//# sourceMappingURL=1614197830902-addSensitiveFieldToStory.js.map