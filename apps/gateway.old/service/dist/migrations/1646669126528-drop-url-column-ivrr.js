"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropUrlColumnIvrr1646669126528 = void 0;
const typeorm_1 = require("typeorm");
class dropUrlColumnIvrr1646669126528 {
    constructor() {
        this.name = 'dropUrlColumnIvrr1646669126528';
        this.tableName = 'ivrr_call';
        this.column = new typeorm_1.TableColumn({
            name: 'url',
            type: 'text',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
}
exports.dropUrlColumnIvrr1646669126528 = dropUrlColumnIvrr1646669126528;
//# sourceMappingURL=1646669126528-drop-url-column-ivrr.js.map