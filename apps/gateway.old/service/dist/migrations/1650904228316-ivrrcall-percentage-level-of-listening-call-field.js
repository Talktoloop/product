"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ivrrcallPercentageLevelOfListeningCallField1650904228316 = void 0;
const typeorm_1 = require("typeorm");
class ivrrcallPercentageLevelOfListeningCallField1650904228316 {
    constructor() {
        this.tableName = 'ivrr_call';
        this.newColumn = new typeorm_1.TableColumn({
            type: 'int',
            name: 'percentage_level_of_listening_call',
            default: 0,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.ivrrcallPercentageLevelOfListeningCallField1650904228316 = ivrrcallPercentageLevelOfListeningCallField1650904228316;
//# sourceMappingURL=1650904228316-ivrrcall-percentage-level-of-listening-call-field.js.map