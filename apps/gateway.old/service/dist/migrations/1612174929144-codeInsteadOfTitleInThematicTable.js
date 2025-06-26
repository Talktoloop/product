"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeInsteadOfTitleInThematicTable1612174929144 = void 0;
const typeorm_1 = require("typeorm");
class CodeInsteadOfTitleInThematicTable1612174929144 {
    constructor() {
        this.thematics = [
            { code: 'emergencyResponse', title: 'Emergency Response' },
            { code: 'idCards', title: 'ID Cards' },
            { code: 'campManagement', title: 'Camp Management' },
            { code: 'distribution', title: 'Distribution' },
            { code: 'cash', title: 'Cash' },
            { code: 'foodItems', title: 'Food Items' },
            { code: 'non-foodItems', title: 'Non-Food Items' },
            { code: 'health', title: 'Health' },
            { code: 'hospitals', title: 'Hospitals' },
            { code: 'nutrition', title: 'Nutrition' },
            { code: 'communitySensitisation', title: 'Community Sensitisation' },
            { code: 'gender-basedViolence', title: 'Gender-Based Violence' },
            { code: 'mentalHealth', title: 'Mental Health' },
            {
                code: 'sexualAndReproductiveRights',
                title: 'Sexual and Reproductive Rights',
            },
            { code: 'epidemics', title: 'Epidemics' },
            { code: 'covid', title: 'COVID' },
            { code: 'ebola', title: 'EBOLA' },
            { code: 'foodSecurity', title: 'Food Security' },
            { code: 'livelihoods', title: 'Livelihoods' },
            { code: 'cash', title: 'Cash' },
            { code: 'training', title: 'Training' },
            { code: 'wash', title: 'WASH' },
            { code: 'waterPoints', title: 'Water Points' },
            { code: 'latrines', title: 'Latrines' },
            { code: 'shelter', title: 'Shelter' },
            { code: 'housing', title: 'Housing' },
            { code: 'lighting', title: 'Lighting' },
            { code: 'logistics', title: 'Logistics' },
            { code: 'construction', title: 'Construction' },
            { code: 'education', title: 'Education' },
            { code: 'primary', title: 'Primary' },
            { code: 'secondary', title: 'Secondary' },
            { code: 'university', title: 'University' },
            { code: 'training', title: 'Training' },
            { code: 'cross-cutting', title: 'Cross-Cutting' },
            { code: 'cash', title: 'Cash' },
            { code: 'security', title: 'Security' },
            {
                code: 'campCoordination/Management',
                title: 'Camp Coordination/Management',
            },
            { code: 'capacityBuilding', title: 'Capacity Building' },
            { code: 'communitySensitisation', title: 'Community Sensitisation' },
            { code: 'aidWorkers', title: 'Aid Workers' },
            { code: 'other', title: 'Other' },
            { code: 'financeManagement', title: 'Finance Management' },
            { code: 'government', title: 'Government' },
        ];
        this.tableName = 'thematic';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'code',
            type: 'varchar',
            length: '100',
        });
        this.oldColumn = new typeorm_1.TableColumn({
            name: 'title',
            type: 'varchar',
            length: '100',
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        for (const thematic of this.thematics) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE title = ?`, [thematic.code, thematic.title]);
        }
        await queryRunner.dropColumn(this.tableName, this.oldColumn);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.oldColumn);
        for (const thematic of this.thematics) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE code = ?`, [thematic.title, thematic.code]);
        }
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.CodeInsteadOfTitleInThematicTable1612174929144 = CodeInsteadOfTitleInThematicTable1612174929144;
//# sourceMappingURL=1612174929144-codeInsteadOfTitleInThematicTable.js.map