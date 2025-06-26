"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameOptionsInThematicAreaTable1653286641575 = void 0;
class RenameOptionsInThematicAreaTable1653286641575 {
    constructor() {
        this.tableName = 'thematic';
        this.options = {
            hospitals: 'medicalCentres',
            epidemics: 'epidemics/Pandemics',
            'campCoordination/Management': 'campCoordinationManagement',
            campManagement: 'campCoordinationManagement',
            lighting: 'lightingAndElectricity',
            university: 'university/Colleges/Trades',
            other: 'governance',
            financeManagement: 'finance',
            government: 'civicSpace',
            security: 'safetyAndSecurity',
            foodAssistance: 'feeding/Malnutrition',
            training: 'capacityBuilding',
        };
    }
    async up(queryRunner) {
        const operations = [];
        for (const [oldValue, newValue] of Object.entries(this.options)) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE code = ?`, [newValue, oldValue]));
        }
        await Promise.all(operations);
    }
    async down(queryRunner) {
        const operations = [];
        for (const [oldValue, newValue] of Object.entries(this.options)) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE code = ?`, [oldValue, newValue]));
        }
        await Promise.all(operations);
    }
}
exports.RenameOptionsInThematicAreaTable1653286641575 = RenameOptionsInThematicAreaTable1653286641575;
//# sourceMappingURL=1653286641575-renameOptionsInThematicAreaTable.js.map