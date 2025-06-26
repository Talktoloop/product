"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarIsNullableInCaseManagerTable1646288208863 = void 0;
class AvatarIsNullableInCaseManagerTable1646288208863 {
    constructor() {
        this.tableName = 'case_manager';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY avatar varchar(255) null`);
    }
    async down() {
    }
}
exports.AvatarIsNullableInCaseManagerTable1646288208863 = AvatarIsNullableInCaseManagerTable1646288208863;
//# sourceMappingURL=1646288208863-avatarIsNullableInCaseManagerTable.js.map