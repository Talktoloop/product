"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDifficultyToStoryTable1622662942357 = void 0;
const typeorm_1 = require("typeorm");
class AddDifficultyToStoryTable1622662942357 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'difficulty',
            type: 'tinyint',
            isNullable: true,
            default: null,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddDifficultyToStoryTable1622662942357 = AddDifficultyToStoryTable1622662942357;
//# sourceMappingURL=1622662942357-addDifficultyToStoryTable.js.map