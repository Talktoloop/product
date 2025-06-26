"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnSolutionProposedToStoryComments1732474263945 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnSolutionProposedToStoryComments1732474263945 {
    constructor() {
        this.tableName = 'story_comment';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'solution_proposed',
            type: 'boolean',
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
exports.AddColumnSolutionProposedToStoryComments1732474263945 = AddColumnSolutionProposedToStoryComments1732474263945;
//# sourceMappingURL=1732474263945-addColumnSolutionProposedToStoryComments.js.map