"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContactNeededToConversationTable1619550430324 = void 0;
const typeorm_1 = require("typeorm");
class AddContactNeededToConversationTable1619550430324 {
    constructor() {
        this.tableName = 'conversation';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'contact_needed',
            type: 'boolean',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddContactNeededToConversationTable1619550430324 = AddContactNeededToConversationTable1619550430324;
//# sourceMappingURL=1619550430324-addContactNeededToConversationTable.js.map