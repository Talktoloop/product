import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import { setDelay } from '@ourloop/shared';

export class AddCreatedAtToUserTable1706864521159
  implements MigrationInterface
{
  tableName = 'user';
  column = new TableColumn({
    name: 'created_at',
    type: 'datetime',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY COLUMN ${this.column.name} ${this.column.type} NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY COLUMN last_activity ${this.column.type} NULL DEFAULT NULL`,
    );

    const users = await queryRunner.query(
      `SELECT u.id, u.last_activity, u.registration_date, u.consents_date, u.invitation_date, s.created_at story_created_at, c.created_at comment_created_at 
      FROM \`${this.tableName}\` u 
      LEFT JOIN \`story\` s ON u.id = s.user_id 
      LEFT JOIN \`story_comment\` c ON u.id = c.user_id 
      ORDER BY u.id, s.created_at, c.created_at`,
    );

    let dates: Date[] = [];
    let userId = null;

    for (const user of users) {
      if (userId !== user['id']) {
        dates = [
          user['last_activity'],
          user['registration_date'],
          user['consents_date'],
          user['invitation_date'],
          user['story_created_at'],
          user['comment_created_at'],
        ]
          .filter((value) => value)
          .sort(
            (prev, next) => new Date(prev).getTime() - new Date(next).getTime(),
          );

        if (!dates.length) {
          dates.push(new Date());
        }

        await queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`created_at\` = ? WHERE id = ?`,
          [dates[0] ?? null, user.id],
        );

        await setDelay(100);
      }
      userId = user['id'];
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY COLUMN last_activity ${this.column.type} NULL DEFAULT CURRENT_TIMESTAMP`,
    );
  }
}
