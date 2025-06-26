"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTelegramTypeToChannelInStoryTable1672823305511 = void 0;
const typeorm_1 = require("typeorm");
class AddTelegramTypeToChannelInStoryTable1672823305511 {
    constructor() {
        this.tableName = 'story';
        this.oldChannelColumn = new typeorm_1.TableColumn({
            name: 'channel',
            type: 'enum',
            enum: ['sms', 'web', 'whatsapp', 'messenger', 'ivrr'],
            enumName: 'channelEnum',
            default: '"web"',
        });
        this.newChannelColumn = new typeorm_1.TableColumn({
            name: 'channel',
            type: 'enum',
            enum: ['sms', 'web', 'whatsapp', 'messenger', 'ivrr', 'telegram'],
            enumName: 'channelEnum',
            default: '"web"',
        });
    }
    async up(queryRunner) {
        await queryRunner.changeColumn(this.tableName, 'channel', this.newChannelColumn);
    }
    async down(queryRunner) {
        await queryRunner.changeColumn(this.tableName, 'channel', this.oldChannelColumn);
    }
}
exports.AddTelegramTypeToChannelInStoryTable1672823305511 = AddTelegramTypeToChannelInStoryTable1672823305511;
//# sourceMappingURL=1672823305511-AddTelegramTypeToChannelInStoryTable.js.map