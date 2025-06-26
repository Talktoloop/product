"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullableStoryType1640109195704 = void 0;
class nullableStoryType1640109195704 {
    constructor() {
        this.name = 'nullableStoryType1640109195704';
    }
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `messenger_conversation` CHANGE `story_type` `story_type` varchar(255) NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `messenger_conversation` CHANGE `story_type` `story_type` varchar(255) NOT NULL');
    }
}
exports.nullableStoryType1640109195704 = nullableStoryType1640109195704;
//# sourceMappingURL=1640109195704-nullable-story-type.js.map