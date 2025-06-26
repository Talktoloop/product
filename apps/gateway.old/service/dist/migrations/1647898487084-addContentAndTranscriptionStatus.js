"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContentAndTranscriptionStatus1647898487084 = void 0;
const typeorm_1 = require("typeorm");
class AddContentAndTranscriptionStatus1647898487084 {
    constructor() {
        this.tableName = 'ivrr_call';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'content',
                type: 'text',
                isNullable: false,
            }),
            new typeorm_1.TableColumn({
                name: 'transcription_status',
                type: 'int',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.newColumns);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.AddContentAndTranscriptionStatus1647898487084 = AddContentAndTranscriptionStatus1647898487084;
//# sourceMappingURL=1647898487084-addContentAndTranscriptionStatus.js.map