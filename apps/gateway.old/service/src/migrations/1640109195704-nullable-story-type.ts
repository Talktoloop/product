import { MigrationInterface, QueryRunner } from 'typeorm';

export class nullableStoryType1640109195704 implements MigrationInterface {
  name = 'nullableStoryType1640109195704';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `messenger_conversation` CHANGE `story_type` `story_type` varchar(255) NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `messenger_conversation` CHANGE `story_type` `story_type` varchar(255) NOT NULL',
    );
  }
}
