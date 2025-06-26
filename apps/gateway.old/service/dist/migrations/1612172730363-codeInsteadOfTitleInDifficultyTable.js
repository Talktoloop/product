"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeInsteadOfTitleInDifficultyTable1612172730363 = void 0;
const typeorm_1 = require("typeorm");
class CodeInsteadOfTitleInDifficultyTable1612172730363 {
    constructor() {
        this.difficulties = [
            {
                code: 'seeing',
                title: 'Seeing',
                titleExtended: 'Difficulty seeing, even if wearing glasses',
            },
            {
                code: 'hearing',
                title: 'Hearing',
                titleExtended: 'Difficulty hearing, even if using a hearing aid',
            },
            {
                code: 'walkingOrClimbingSteps',
                title: 'Walking or climbing steps',
                titleExtended: 'Difficulty walking or climbing steps',
            },
            {
                code: 'remembering',
                title: 'Remembering',
                titleExtended: 'Difficulty remembering or concentrating',
            },
            {
                code: 'selfCareForExampleWashing',
                title: 'Self-Care e.g. washing',
                titleExtended: 'Difficulty with self-care, such as washing or dressing',
            },
            {
                code: 'communicating',
                title: 'Communicating',
                titleExtended: 'Difficulty communicating when using your mother tongue',
            },
        ];
        this.tableName = 'difficulty';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'code',
            type: 'varchar',
            length: '100',
        });
        this.oldColumns = [
            new typeorm_1.TableColumn({
                name: 'title',
                type: 'varchar',
                length: '100',
            }),
            new typeorm_1.TableColumn({
                name: 'title_extended',
                type: 'varchar',
                length: '150',
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        for (const difficulty of this.difficulties) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE title = ?`, [difficulty.code, difficulty.title]);
        }
        await queryRunner.dropColumns(this.tableName, this.oldColumns);
    }
    async down(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.oldColumns);
        for (const difficulty of this.difficulties) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ?, \`title_extended\` = ? WHERE code = ?`, [difficulty.title, difficulty.titleExtended, difficulty.code]);
        }
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.CodeInsteadOfTitleInDifficultyTable1612172730363 = CodeInsteadOfTitleInDifficultyTable1612172730363;
//# sourceMappingURL=1612172730363-codeInsteadOfTitleInDifficultyTable.js.map