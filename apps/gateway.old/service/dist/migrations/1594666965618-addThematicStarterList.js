"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddThematicStarterList1594666965618 = void 0;
class AddThematicStarterList1594666965618 {
    constructor() {
        this.tableName = 'thematic';
        this.listOfThematic = ['Helth', 'WASH', 'Education', 'High school'];
    }
    async up(queryRunner) {
        await Promise.all(this.listOfThematic.map(async (thematic) => await queryRunner.query(`
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `, [thematic])));
    }
    async down(queryRunner) {
        const queryBuilder = queryRunner.manager.createQueryBuilder();
        Promise.all(this.listOfThematic.map(async (thematic) => await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: thematic })
            .execute()));
    }
}
exports.AddThematicStarterList1594666965618 = AddThematicStarterList1594666965618;
//# sourceMappingURL=1594666965618-addThematicStarterList.js.map