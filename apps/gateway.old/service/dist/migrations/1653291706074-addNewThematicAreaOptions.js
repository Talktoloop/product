"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewThematicAreaOptions1653291706074 = void 0;
const get_thematic_area_categories_1 = __importDefault(require("./utils/get-thematic-area-categories"));
class AddNewThematicAreaOptions1653291706074 {
    constructor() {
        this.tableName = 'thematic';
        this.options = [
            'health.medications/MedicinesFacilitiesAndServices',
            'health.hivAids',
            'health.other',
            'foodSecurity.other',
            'wash.handwashingStations',
            'wash.waterTrucking',
            'wash.solidWaste/GarbageManagement',
            'wash.waterFacilitiesAndSupplies',
            'wash.other',
            'shelter.temporaryShelters',
            'shelter.technicalSupport',
            'shelter.other',
            'education.earlyChildhood',
            'education.scholarships',
            'education.other',
            'protection',
            'protection.children',
            'protection.youngPeople',
            'protection.women',
            'protection.personWithDisabiltiies',
            'protection.elderlies',
            'protection.lgtbq+',
            'protection.chronicallyIllPeople',
            'protection.legalStatus(refugees)',
            'protection.indigenousCommunity',
            'protection.lowIncomeFamilies',
            'protection.other',
            'governance.elections',
            'governance.other',
            'cross-cutting.telecommunications',
            'cross-cutting.climateChange',
            'cross-cutting.environment',
            'cross-cutting.drrAndPreparedness',
            'cross-cutting.other',
        ];
    }
    async addCategory(queryRunner, categoryIds, categoryCode) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`,\`code\`) VALUES (?,?)`, [null, categoryCode]);
        const category = await queryRunner
            .query(`SELECT \`id\`, \`code\` FROM \`${this.tableName}\` WHERE \`code\` = ?`, [categoryCode])
            .then((result) => result[0]);
        categoryIds[category.code] = category.id;
        return categoryIds;
    }
    async up(queryRunner) {
        let categories = await (0, get_thematic_area_categories_1.default)(queryRunner);
        const operations = [];
        let categoryCode, subcategoryCode;
        for (const option of this.options) {
            [categoryCode, subcategoryCode] = option.split('.');
            if (!categories[categoryCode]) {
                categories = await this.addCategory(queryRunner, categories, categoryCode);
            }
            if (subcategoryCode) {
                operations.push(queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`,\`code\`) VALUES (?,?)`, [categories[categoryCode], subcategoryCode]));
            }
        }
        await Promise.all(operations);
    }
    async down(queryRunner) {
        const categories = await (0, get_thematic_area_categories_1.default)(queryRunner);
        const operations = [];
        let categoryCode, subcategoryCode;
        for (const option of this.options) {
            [categoryCode, subcategoryCode] = option.split('.');
            operations.push(subcategoryCode
                ? queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`, [categories[categoryCode], subcategoryCode])
                : queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ? AND parent_thematic_id IS NULL`, [categoryCode]));
        }
        await Promise.all(operations);
    }
}
exports.AddNewThematicAreaOptions1653291706074 = AddNewThematicAreaOptions1653291706074;
//# sourceMappingURL=1653291706074-addNewThematicAreaOptions.js.map