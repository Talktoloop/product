"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateThematicAreaOption1680777155261 = void 0;
const get_thematic_area_categories_1 = __importDefault(require("./utils/get-thematic-area-categories"));
class migrateThematicAreaOption1680777155261 {
    constructor() {
        this.tableName = 'thematic';
        this.oldSubcategoryCode = 'other.loopOnboarding';
        this.nextSubcategoryCode = 'cross-cutting.drrAndPreparedness';
    }
    async up(queryRunner) {
        const categories = await (0, get_thematic_area_categories_1.default)(queryRunner);
        const subcategories = await queryRunner.query(`SELECT \`id\`, \`parent_thematic_id\`, \`code\` FROM \`thematic\` WHERE \`parent_thematic_id\` IS NOT NULL`);
        const oldSubcategoryCodeArr = this.oldSubcategoryCode.split('.');
        const nextSubcategoryCodeArr = this.nextSubcategoryCode.split('.');
        const oldSubcategory = subcategories.find((entity) => (entity === null || entity === void 0 ? void 0 : entity.parent_thematic_id) === categories[oldSubcategoryCodeArr[0]] &&
            (entity === null || entity === void 0 ? void 0 : entity.code) === oldSubcategoryCodeArr[1]);
        const nextSubcategory = await queryRunner
            .query(`SELECT \`id\`, \`parent_thematic_id\`, \`code\`, \`order\` FROM \`thematic\` WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`, [categories[nextSubcategoryCodeArr[0]], nextSubcategoryCodeArr[1]])
            .then((result) => result[0]);
        await queryRunner.query(`UPDATE \`thematic\` SET \`order\` = \`order\` + 1 WHERE \`order\` >= ?`, [nextSubcategory.order]);
        const { insertId } = await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`, \`code\`, \`order\`) VALUES (?, ?, ?)`, [
            nextSubcategory.parent_thematic_id,
            oldSubcategoryCodeArr[1],
            nextSubcategory.order,
        ]);
        await queryRunner.query(`UPDATE \`story_thematic\` SET \`thematic_id\` = ? WHERE \`thematic_id\` >= ?`, [insertId, oldSubcategory.id]);
        await queryRunner.query(`DELETE FROM \`thematic\` WHERE \`id\` = ?`, [
            oldSubcategory.id,
        ]);
        await queryRunner.query(`UPDATE \`thematic\` SET \`order\` = \`order\` - 1 WHERE \`order\` >= ?`, [oldSubcategory.order]);
        await queryRunner.query(`DELETE FROM \`thematic\` WHERE \`id\` = ?`, [
            categories[oldSubcategoryCodeArr[0]],
        ]);
    }
    async down() {
    }
}
exports.migrateThematicAreaOption1680777155261 = migrateThematicAreaOption1680777155261;
//# sourceMappingURL=1680777155261-migrateThematicAreaOption.js.map