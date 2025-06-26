"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTitleExtendedData1601925177585 = void 0;
const typeorm_1 = require("typeorm");
class AddTitleExtendedData1601925177585 {
    constructor() {
        this.tableName = 'difficulty';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'title_extended',
            type: 'varchar',
            length: '150',
            isNullable: false,
        });
        this.titleExtendData = [
            {
                id: 1,
                titleExtended: 'Difficulty seeing, even if wearing glasses',
            },
            {
                id: 2,
                titleExtended: 'Difficulty hearing, even if using a hearing aid',
            },
            {
                id: 3,
                titleExtended: 'Difficulty walking or climbing steps',
            },
            {
                id: 4,
                titleExtended: 'Difficulty remembering or concentrating',
            },
            {
                id: 5,
                titleExtended: 'Difficulty with self-care, such as washing or dressing',
            },
            {
                id: 6,
                titleExtended: 'Difficulty communicating when using your mother tongue',
            },
        ];
    }
    async up(queryRunner) {
        try {
            await Promise.all(this.titleExtendData.map(async (update) => await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title_extended\` = ? WHERE id = ?`, [update.titleExtended, update.id])));
        }
        catch (error) {
            console.log(error);
        }
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddTitleExtendedData1601925177585 = AddTitleExtendedData1601925177585;
//# sourceMappingURL=1601925177585-addTitleExtendedData.js.map