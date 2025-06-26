"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getThematicAreaCategories = async (queryRunner) => {
    const categories = await queryRunner.query(`SELECT \`id\`, \`code\` FROM \`thematic\` WHERE \`parent_thematic_id\` IS NULL`);
    return categories.reduce((data, category) => ((data[category.code] = category.id), data), {});
};
exports.default = getThematicAreaCategories;
//# sourceMappingURL=get-thematic-area-categories.js.map