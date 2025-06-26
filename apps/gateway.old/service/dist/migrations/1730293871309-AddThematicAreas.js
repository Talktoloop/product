"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddThematicAreas1730293871309 = void 0;
class AddThematicAreas1730293871309 {
    constructor() {
        this.tableName = 'thematic';
        this.crossCuttingThematic = 'cross-cutting';
        this.governanceThematic = 'governance';
        this.healthThematic = 'health';
        this.protectionThematic = 'protection';
        this.washThematic = 'wash';
        this.educationThematic = 'education';
        this.newEducationThematics = [
            'informationEducationAndCommunicationActivities',
        ];
        this.newHealthThematics = [
            'quarantineFacilities',
            'vaccines',
            'insurance',
        ];
        this.newWashThematics = [
            'hygienicPracticesCommunityDisinfection',
        ];
        this.newProtectionThematics = [
            'landRights',
            'landmines/UnexplodedOrdinance',
        ];
        this.newGovernanceThematics = ['transportation'];
        this.newCrossCuttingThematics = ['droughts', 'laborAndJobs'];
    }
    async up(queryRunner) {
        const crossCuttingCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.crossCuttingThematic]);
        const governanceCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.governanceThematic]);
        const healthCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.healthThematic]);
        const protectionCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.protectionThematic]);
        const washCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.washThematic]);
        const educationCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.educationThematic]);
        if (healthCategory.length > 0) {
            const healthCategoryId = healthCategory[0].id;
            this.newHealthThematics.map((thematic, index) => {
                queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [thematic, index + 1, healthCategoryId]);
            });
        }
        if (washCategory.length > 0) {
            const washCategoryId = washCategory[0].id;
            this.newWashThematics.map((thematic, index) => {
                queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [thematic, index + 1, washCategoryId]);
            });
        }
        if (protectionCategory.length > 0) {
            const protectionCategoryId = protectionCategory[0].id;
            this.newProtectionThematics.map((thematic, index) => {
                queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [thematic, index + 1, protectionCategoryId]);
            });
        }
        if (governanceCategory.length > 0) {
            const governanceCategoryId = governanceCategory[0].id;
            this.newGovernanceThematics.map((thematic, index) => {
                queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [thematic, index + 1, governanceCategoryId]);
            });
        }
        if (crossCuttingCategory.length > 0) {
            const crossCuttingCategoryId = crossCuttingCategory[0].id;
            this.newCrossCuttingThematics.map((thematic, index) => {
                queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [thematic, index + 1, crossCuttingCategoryId]);
            });
        }
        if (educationCategory.length > 0) {
            const educationCategoryId = educationCategory[0].id;
            this.newEducationThematics.map((thematic, index) => {
                queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [thematic, index + 1, educationCategoryId]);
            });
        }
    }
    async down(queryRunner) {
        const allNewThematics = [
            ...this.newHealthThematics,
            ...this.newWashThematics,
            ...this.newProtectionThematics,
            ...this.newGovernanceThematics,
            ...this.newCrossCuttingThematics,
            ...this.newEducationThematics
        ];
        await queryRunner.query(`DELETE FROM ${this.tableName} WHERE code IN (${allNewThematics
            .map(() => '?')
            .join(', ')})`, allNewThematics);
    }
}
exports.AddThematicAreas1730293871309 = AddThematicAreas1730293871309;
//# sourceMappingURL=1730293871309-AddThematicAreas.js.map