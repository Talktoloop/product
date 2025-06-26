"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIsMinorityByModeratorToStoryRecipient1731511927160 = void 0;
const typeorm_1 = require("typeorm");
class AddIsMinorityByModeratorToStoryRecipient1731511927160 {
    constructor() {
        this.tableName = 'story_recipient';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'is_minority_by_moderator',
            type: 'boolean',
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
exports.AddIsMinorityByModeratorToStoryRecipient1731511927160 = AddIsMinorityByModeratorToStoryRecipient1731511927160;
//# sourceMappingURL=1731511927160-AddIsMinorityByModeratorToStoryRecipient.js.map