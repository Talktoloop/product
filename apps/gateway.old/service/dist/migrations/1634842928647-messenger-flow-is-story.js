"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messengerFlowIsStory1634842928647 = void 0;
const typeorm_1 = require("typeorm");
class messengerFlowIsStory1634842928647 {
    constructor() {
        this.tableName = 'messenger_message';
        this.column = new typeorm_1.TableColumn({
            name: 'is_story',
            type: 'boolean',
            isNullable: false,
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.messengerFlowIsStory1634842928647 = messengerFlowIsStory1634842928647;
//# sourceMappingURL=1634842928647-messenger-flow-is-story.js.map