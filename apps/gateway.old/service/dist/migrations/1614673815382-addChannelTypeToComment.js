"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddChannelTypeToComment1614673815382 = void 0;
const typeorm_1 = require("typeorm");
class AddChannelTypeToComment1614673815382 {
    constructor() {
        this.tableName = 'comment';
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
exports.AddChannelTypeToComment1614673815382 = AddChannelTypeToComment1614673815382;
//# sourceMappingURL=1614673815382-addChannelTypeToComment.js.map