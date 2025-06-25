import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MoveUserDataFromCommentTableToStoryCommentRecipientTable1676547408613
  implements MigrationInterface
{
  table = 'comment';
  columns = [
    new TableColumn({
      name: 'email',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
    new TableColumn({
      name: 'phone',
      type: 'varchar',
      length: '20',
      isNullable: true,
    }),
    new TableColumn({
      name: 'nickname',
      type: 'varchar',
      length: '60',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const comments = await queryRunner.query(
      `SELECT \`id\`, \`email\`, \`phone\`, \`nickname\` FROM \`${this.table}\``,
    );

    for (const comment of comments) {
      const result = await queryRunner.query(
        `INSERT INTO \`story_comment_recipient\` (\`email\`, \`phone\`, \`nickname\`) VALUES (?, ?, ?)`,
        [comment.email, comment.phone, comment.nickname],
      );

      await queryRunner.query(
        `UPDATE \`${this.table}\` SET \`recipient_id\` = ? WHERE id = ?`,
        [result.insertId, comment.id],
      );
    }

    await queryRunner.query(`
        ALTER TABLE \`${this.table}\` 
        DROP COLUMN email, 
        DROP COLUMN phone, 
        DROP COLUMN nickname
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.table, this.columns);

    const recipients = await queryRunner.query(
      `SELECT \`id\`, \`email\`, \`phone\`,  \`nickname\` FROM \`story_comment_recipient\``,
    );

    for (const recipient of recipients) {
      const comment = await queryRunner
        .query(`SELECT \`id\` FROM \`${this.table}\` where recipient_id = ?`, [
          recipient.id,
        ])
        .then((result) => result[0]);

      await queryRunner.query(
        `UPDATE \`${this.table}\` SET \`email\` = ?, \`phone\` = ?, \`nickname\` = ? WHERE id = ?`,
        [recipient.email, recipient.phone, recipient.nickname, comment.id],
      );
    }
  }
}
