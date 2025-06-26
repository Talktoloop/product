"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIVRRTypeToChannelInCommentTable1650980075798 = void 0;
const typeorm_1 = require("typeorm");
class AddIVRRTypeToChannelInCommentTable1650980075798 {
    constructor() {
        this.tableName = 'comment';
        this.oldChannelColumn = new typeorm_1.TableColumn({
            name: 'channel',
            type: 'enum',
            enum: ['sms', 'web', 'whatsapp', 'messenger'],
            enumName: 'channelEnum',
            default: '"web"',
        });
        this.newChannelColumn = new typeorm_1.TableColumn({
            name: 'channel',
            type: 'enum',
            enum: ['sms', 'web', 'whatsapp', 'messenger', 'ivrr'],
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
exports.AddIVRRTypeToChannelInCommentTable1650980075798 = AddIVRRTypeToChannelInCommentTable1650980075798;
//# sourceMappingURL=1650980075798-addIvrrTypeToChannelInCommentTable.js.map