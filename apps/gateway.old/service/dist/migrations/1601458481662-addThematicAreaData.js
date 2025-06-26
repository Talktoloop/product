"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddThematicAreaData1601458481662 = void 0;
class AddThematicAreaData1601458481662 {
    constructor() {
        this.tableName = 'thematic';
        this.thematics = [
            {
                main: 'Emergency Response',
                data: [
                    'ID Cards',
                    'Camp Management',
                    'Distribution',
                    'Cash',
                    'Food Items',
                    'Non-Food Items',
                ],
            },
            {
                main: 'Health',
                data: [
                    'Hospitals',
                    'Nutrition',
                    'Community Sensitisation',
                    'Gender-Based Violence',
                    'Mental Health',
                    'Sexual and Reproductive Rights',
                    'Epidemics',
                    'COVID',
                    'EBOLA',
                ],
            },
            {
                main: 'Food Security',
                data: ['Livelihoods', 'Cash', 'Training'],
            },
            {
                main: 'WASH',
                data: ['Water Points', 'Latrines'],
            },
            {
                main: 'Shelter',
                data: ['Housing', 'Lighting', 'Logistics', 'Construction'],
            },
            {
                main: 'Education',
                data: ['Primary', 'Secondary', 'University', 'Training'],
            },
            {
                main: 'Cross-Cutting',
                data: [
                    'Cash',
                    'Security',
                    'Camp Coordination/Management',
                    'Capacity Building',
                    'Community Sensitisation',
                    'Aid Workers',
                ],
            },
            {
                main: 'Other',
                data: ['Security', 'Finance Management', 'Government'],
            },
        ];
    }
    async up(queryRunner) {
        const queryManager = queryRunner.manager.createQueryBuilder();
        await queryManager.delete().from(this.tableName).execute();
        for (const thematic of this.thematics) {
            const mainTheme = await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`title\`) VALUES (?)`, [thematic.main]);
            const parentKey = mainTheme.insertId;
            await Promise.all(thematic.data.map(async (subThematic) => {
                await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`title\`, \`parent_thematic_id\`) VALUES (?, ?)`, [subThematic, parentKey]);
            }));
        }
    }
    async down(queryRunner) {
        await queryRunner.clearTable(this.tableName);
    }
}
exports.AddThematicAreaData1601458481662 = AddThematicAreaData1601458481662;
//# sourceMappingURL=1601458481662-addThematicAreaData.js.map