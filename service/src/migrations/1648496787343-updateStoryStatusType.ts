import { STORY_STATUS } from '@ourloop/shared';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateStoryStatusType1648496787343 implements MigrationInterface {
  private tableName = 'story';
  private columnName = 'status';

  private oldStoryData = {
    NOT_STARTED: 1,
    PENDING_TRANSLATION: 2,
    AWAITING_REPLAY: 3,
    ISSUER_REPLIED: 4,
    ISSUER_DID_NOT_REPLIED: 5,
    SENT_FROM_CASE_MANAGER_TO_LOOP: 6,
    PENDING_TRANSCRIPTION: 8,
    PENDING_PUBLICATION: 9,
    PUBLISHED: 10,
    REJECTED: 11,
    SENT_TO_CASE_MANAGER: 12,
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} varchar(100) NOT NULL`,
    );

    await Promise.all(
      Object.keys(this.oldStoryData).map(async (oldStoryStatus) => {
        await queryRunner.query(
          `UPDATE ${this.tableName} SET ${this.columnName} = '${STORY_STATUS[oldStoryStatus]}' WHERE ${this.columnName} = '${this.oldStoryData[oldStoryStatus]}'`,
        );
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} int NOT NULL`,
    );
  }
}
