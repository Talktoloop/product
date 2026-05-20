import { MigrationInterface, QueryRunner } from 'typeorm';

export class setCommentNickname1648065575942 implements MigrationInterface {
  name = 'setCommentNickname1648065575942';

  commentTable = 'comment';
  userTable = 'user';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const commentsWithUserIdButWithoutNickname: {
      id: string;
      user_id: string;
      nickname: string;
    }[] = await queryRunner.query(
      `SELECT id, user_id, nickname FROM ${this.commentTable} WHERE user_id IS NOT NULL AND nickname IS NULL`,
    );
    for (const comment of commentsWithUserIdButWithoutNickname) {
      const queryResult: { nickname: string }[] = await queryRunner.query(
        `SELECT nickname FROM ${this.userTable} WHERE id = '${comment.user_id}'`,
      );
      const nickname = queryResult.length > 0 ? queryResult[0].nickname : null;

      if (nickname) {
        await queryRunner.query(
          `UPDATE ${this.commentTable} SET nickname = '${nickname}' WHERE id = '${comment.id}'`,
        );
      }
    }
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
