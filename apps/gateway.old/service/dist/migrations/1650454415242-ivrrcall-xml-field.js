"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ivrrcallXmlField1650454415242 = void 0;
const typeorm_1 = require("typeorm");
class ivrrcallXmlField1650454415242 {
    constructor() {
        this.tableName = 'ivrr_call';
        this.newColumn = new typeorm_1.TableColumn({
            type: 'varchar',
            name: 'twilio_flow_xml',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY s3_file_id varchar(100) null`);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.ivrrcallXmlField1650454415242 = ivrrcallXmlField1650454415242;
//# sourceMappingURL=1650454415242-ivrrcall-xml-field.js.map