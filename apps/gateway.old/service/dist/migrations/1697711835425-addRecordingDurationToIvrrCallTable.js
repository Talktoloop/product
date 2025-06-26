"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecordingDurationToIvrrCallTable1697711835425 = void 0;
const typeorm_1 = require("typeorm");
class addRecordingDurationToIvrrCallTable1697711835425 {
    constructor() {
        this.tableName = 'ivrr_call';
        this.column = new typeorm_1.TableColumn({
            name: 'recording_duration',
            type: 'int',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.addRecordingDurationToIvrrCallTable1697711835425 = addRecordingDurationToIvrrCallTable1697711835425;
//# sourceMappingURL=1697711835425-addRecordingDurationToIvrrCallTable.js.map