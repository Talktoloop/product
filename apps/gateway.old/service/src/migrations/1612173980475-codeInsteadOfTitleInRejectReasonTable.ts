import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CodeInsteadOfTitleInRejectReasonTable1612173980475
  implements MigrationInterface {
  private rejectReasons = [
    {
      code: 'story/replyHasOffensiveOrDiscriminatoryLanguageInIt',
      title: 'The story / reply has offensive or discriminatory language in it',
    },
    {
      code: 'story/replyDoesNotFollowTheCommunityStandards',
      title:
        'The story / reply does not follow the community standards, designed to ensure a safe space to share feedback',
    },
    {
      code: 'thereIsConcernAboutTheAuthenticityOfTheStory/reply',
      title: 'There is a concern about the authenticity of the story / reply',
    },
    {
      code: 'thereWasConcernThatTheStory/replyCouldCauseHarmIfPostedPublicly',
      title:
        'There was a concern that the story / reply could cause harm if posted publicly. It is being referred on to specialists',
    },
    {
      code: 'story/replyDoesNotRespectTheRightToPrivacyOfOthers',
      title:
        'The story / reply does not respect the right to privacy of others',
    },
  ];
  private tableName = 'reject_reason';
  private newColumn = new TableColumn({
    name: 'code',
    type: 'varchar',
    length: '100',
  });
  private oldColumn = new TableColumn({
    name: 'title',
    type: 'varchar',
    length: '200',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    for (const rejectReason of this.rejectReasons) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE title = ?`,
        [rejectReason.code, rejectReason.title],
      );
    }

    await queryRunner.dropColumn(this.tableName, this.oldColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.oldColumn);

    for (const rejectReason of this.rejectReasons) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE code = ?`,
        [rejectReason.title, rejectReason.code],
      );
    }
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
