"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTranslationStatusToStory1616874622637 = void 0;
const typeorm_1 = require("typeorm");
class AddTranslationStatusToStory1616874622637 {
    constructor() {
        this.tableName = 'story_translation';
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
exports.AddTranslationStatusToStory1616874622637 = AddTranslationStatusToStory1616874622637;
//# sourceMappingURL=1616874622637-addTranslationStatusToStory.js.map