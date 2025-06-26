"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropOriginalStoryColumn1647654475748 = void 0;
const typeorm_1 = require("typeorm");
class dropOriginalStoryColumn1647654475748 {
    constructor() {
        this.name = 'dropOriginalStoryColumn1647654475748';
        this.conversationTableName = 'conversation';
        this.messengerConversationTableName = 'messenger_conversation';
        this.column = new typeorm_1.TableColumn({
            name: 'oryginal_story',
            type: 'text',
        });
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.conversationTableName, this.column);
        await queryRunner.dropColumn(this.messengerConversationTableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.conversationTableName, this.column);
        await queryRunner.addColumn(this.messengerConversationTableName, this.column);
    }
}
exports.dropOriginalStoryColumn1647654475748 = dropOriginalStoryColumn1647654475748;
//# sourceMappingURL=1647654475748-drop-original-story-column.js.map