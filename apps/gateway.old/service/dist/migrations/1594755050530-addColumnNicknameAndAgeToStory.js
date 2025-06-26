"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnNicknameAndAgeToStory1594755050530 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnNicknameAndAgeToStory1594755050530 {
    constructor() {
        this.tableName = 'story';
        this.newColumnNickname = new typeorm_1.TableColumn({
            name: 'nickname',
            type: 'varchar',
            length: '60',
            isNullable: true,
        });
        this.newColumnAge = new typeorm_1.TableColumn({
            name: 'age',
            type: 'int',
            default: 4,
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, [
            this.newColumnAge,
            this.newColumnNickname,
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, [
            this.newColumnAge,
            this.newColumnNickname,
        ]);
    }
}
exports.AddColumnNicknameAndAgeToStory1594755050530 = AddColumnNicknameAndAgeToStory1594755050530;
//# sourceMappingURL=1594755050530-addColumnNicknameAndAgeToStory.js.map