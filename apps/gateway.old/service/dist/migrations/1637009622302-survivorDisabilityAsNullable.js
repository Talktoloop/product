"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurvivorDisabilityAsNullable1637009622302 = void 0;
class SurvivorDisabilityAsNullable1637009622302 {
    constructor() {
        this.tableName = 'case_sync_survivor_disability';
        this.columName = 'survivor_disability';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY ${this.columName} varchar(100) null`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY ${this.columName} varchar(100) not null`);
    }
}
exports.SurvivorDisabilityAsNullable1637009622302 = SurvivorDisabilityAsNullable1637009622302;
//# sourceMappingURL=1637009622302-survivorDisabilityAsNullable.js.map