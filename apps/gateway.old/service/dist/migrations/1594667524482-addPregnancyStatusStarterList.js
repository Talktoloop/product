"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPregnancyStatusStarterList1594667524482 = void 0;
class AddPregnancyStatusStarterList1594667524482 {
    constructor() {
        this.tableName = 'pregnancy_status';
        this.listOfPregnant = [
            'Not pregnant and breastfeeding',
            'Pregnant',
            'Breastfeeding',
            'Both pregnant and breastfeeding',
            'Not disclosed',
        ];
    }
    async up(queryRunner) {
        await Promise.all(this.listOfPregnant.map(async (pregnant) => await queryRunner.query(`
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `, [pregnant])));
    }
    async down(queryRunner) {
        const queryBuilder = queryRunner.manager.createQueryBuilder();
        await Promise.all(this.listOfPregnant.map(async (pregnant) => await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: pregnant })
            .execute()));
    }
}
exports.AddPregnancyStatusStarterList1594667524482 = AddPregnancyStatusStarterList1594667524482;
//# sourceMappingURL=1594667524482-addPregnancyStatusStarterList.js.map