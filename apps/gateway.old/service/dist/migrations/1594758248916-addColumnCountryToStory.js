"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnCountryToStory1594758248916 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnCountryToStory1594758248916 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'country',
            type: 'varchar',
            length: '3',
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddColumnCountryToStory1594758248916 = AddColumnCountryToStory1594758248916;
//# sourceMappingURL=1594758248916-addColumnCountryToStory.js.map