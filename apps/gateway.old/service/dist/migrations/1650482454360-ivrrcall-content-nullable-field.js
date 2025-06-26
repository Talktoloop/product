"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ivrrcallContentNullableField1650482454360 = void 0;
class ivrrcallContentNullableField1650482454360 {
    constructor() {
        this.tableName = 'ivrr_call';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY \`content\` text null`);
    }
    async down() {
    }
}
exports.ivrrcallContentNullableField1650482454360 = ivrrcallContentNullableField1650482454360;
//# sourceMappingURL=1650482454360-ivrrcall-content-nullable-field.js.map