"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTelegramTypeToChannelInCommentTable1672823316124 = void 0;
const typeorm_1 = require("typeorm");
class AddTelegramTypeToChannelInCommentTable1672823316124 {
    constructor() {
        this.tableName = 'comment';
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
exports.AddTelegramTypeToChannelInCommentTable1672823316124 = AddTelegramTypeToChannelInCommentTable1672823316124;
//# sourceMappingURL=1672823316124-AddTelegramTypeToChannelInCommentTable.js.map