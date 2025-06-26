"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddThematicAreaOption1681207096528 = void 0;
const get_thematic_area_categories_1 = __importDefault(require("./utils/get-thematic-area-categories"));
class AddThematicAreaOption1681207096528 {
    constructor() {
        this.tableName = 'thematic';
        this.newSubcategoryCode = 'wash.flooding/HeavyRains';
        this.previousSubcategoryCode = 'wash.waterFacilitiesAndSupplies';
    }
    async up(queryRunner) {
        const categories = await (0, get_thematic_area_categories_1.default)(queryRunner);
        const newSubcategoryCodeArr = this.newSubcategoryCode.split('.');
        const previousSubcategoryCodeArr = this.previousSubcategoryCode.split('.');
        const oldSubcategory = await queryRunner
            .query(`SELECT \`id\`, \`parent_thematic_id\`, \`code\`, \`order\` FROM \`thematic\` WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`, [
            categories[previousSubcategoryCodeArr[0]],
            previousSubcategoryCodeArr[1],
        ])
            .then((result) => result[0]);
        await queryRunner.query(`UPDATE \`thematic\` SET \`order\` = \`order\` + 1 WHERE \`order\` > ?`, [oldSubcategory.order]);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`, \`code\`, \`order\`) VALUES (?, ?, ?)`, [
            categories[newSubcategoryCodeArr[0]],
            newSubcategoryCodeArr[1],
            oldSubcategory.order + 1,
        ]);
    }
    async down() {
    }
}
exports.AddThematicAreaOption1681207096528 = AddThematicAreaOption1681207096528;
//# sourceMappingURL=1681207096528-addThematicAreaOption.js.map