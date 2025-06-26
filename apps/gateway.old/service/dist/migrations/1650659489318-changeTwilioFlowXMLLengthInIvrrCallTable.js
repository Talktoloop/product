"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeTwilioFlowXMLLengthInIvrrCallTable1650659489318 = void 0;
class ChangeTwilioFlowXMLLengthInIvrrCallTable1650659489318 {
    constructor() {
        this.tableName = 'ivrr_call';
        this.columnName = 'twilio_flow_xml';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(1000)`);
    }
    async down() {
    }
}
exports.ChangeTwilioFlowXMLLengthInIvrrCallTable1650659489318 = ChangeTwilioFlowXMLLengthInIvrrCallTable1650659489318;
//# sourceMappingURL=1650659489318-changeTwilioFlowXMLLengthInIvrrCallTable.js.map