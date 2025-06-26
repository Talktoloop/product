"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddChannelTypeToStory1614202709712 = void 0;
const typeorm_1 = require("typeorm");
class AddChannelTypeToStory1614202709712 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'channel',
            type: 'enum',
            enum: ['sms', 'web', 'whatsapp', 'messenger'],
            enumName: 'channelEnum',
            default: '"web"',
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddChannelTypeToStory1614202709712 = AddChannelTypeToStory1614202709712;
//# sourceMappingURL=1614202709712-addChannelTypeToStory.js.map