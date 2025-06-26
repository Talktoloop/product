"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoryStatusType1648496787343 = void 0;
const shared_1 = require("@ourloop/shared");
class UpdateStoryStatusType1648496787343 {
    constructor() {
        this.tableName = 'story';
        this.columnName = 'status';
        this.oldStoryData = {
            NOT_STARTED: 1,
            PENDING_TRANSLATION: 2,
            AWAITING_REPLAY: 3,
            ISSUER_REPLIED: 4,
            ISSUER_DID_NOT_REPLIED: 5,
            SENT_FROM_CASE_MANAGER_TO_LOOP: 6,
            PENDING_TRANSCRIPTION: 8,
            PENDING_PUBLICATION: 9,
            PUBLISHED: 10,
            REJECTED: 11,
            SENT_TO_CASE_MANAGER: 12,
        };
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} varchar(100) NOT NULL`);
        await Promise.all(Object.keys(this.oldStoryData).map(async (oldStoryStatus) => {
            await queryRunner.query(`UPDATE ${this.tableName} SET ${this.columnName} = '${shared_1.STORY_STATUS[oldStoryStatus]}' WHERE ${this.columnName} = '${this.oldStoryData[oldStoryStatus]}'`);
        }));
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} int NOT NULL`);
    }
}
exports.UpdateStoryStatusType1648496787343 = UpdateStoryStatusType1648496787343;
//# sourceMappingURL=1648496787343-updateStoryStatusType.js.map