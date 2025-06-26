"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDifficultiesStarterList1594667006438 = void 0;
class AddDifficultiesStarterList1594667006438 {
    constructor() {
        this.tableName = 'difficulty';
        this.listOfdifficulties = [
            'Seeing',
            'Hearing',
            'Walking or climbing steps',
            'Remembering or concentrating',
            'Self-care',
            'Communication',
        ];
    }
    async up(queryRunner) {
        await Promise.all(this.listOfdifficulties.map(async (difficulty) => await queryRunner.query(`
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `, [difficulty])));
    }
    async down(queryRunner) {
        const queryBuilder = queryRunner.manager.createQueryBuilder();
        Promise.all(this.listOfdifficulties.map(async (difficulty) => await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: difficulty })
            .execute()));
    }
}
exports.AddDifficultiesStarterList1594667006438 = AddDifficultiesStarterList1594667006438;
//# sourceMappingURL=1594667006438-addDifficultiesStarterList.js.map