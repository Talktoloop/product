"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCategryStartedList1594322931137 = void 0;
class AddCategryStartedList1594322931137 {
    constructor() {
        this.tableName = 'category';
        this.listOfCategories = [
            'Thanks',
            'Question',
            'Rumour',
            'Concern',
            'Suggestion',
        ];
    }
    async up(queryRunner) {
        Promise.all(this.listOfCategories.map(async (category) => await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`title\`) VALUES (?)`, [category])));
    }
    async down(queryRunner) {
        const queryBuilder = queryRunner.manager.createQueryBuilder();
        Promise.all(this.listOfCategories.map(async (category) => await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ title: category })
            .execute()));
    }
}
exports.AddCategryStartedList1594322931137 = AddCategryStartedList1594322931137;
//# sourceMappingURL=1594322931137-addCategryStartedList.js.map