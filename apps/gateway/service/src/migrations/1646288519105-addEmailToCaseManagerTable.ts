import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class AddEmailToCaseManagerTable1646288519105
  implements MigrationInterface
{
  tableName = 'case_manager';
  newColumn = new TableColumn({
    name: 'email',
    type: 'varchar',
    length: '100',
    isNullable: true,
    isUnique: true,
  });
  emails: [
    {
      email: 'lian@talktoloop.org';
      nickname: 'Lian';
      visible: true;
    },
    {
      email: 'alex@talktoloop.org';
      nickname: 'Alex';
      visible: false;
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`email\` = ? WHERE nickname = ?`,
      ['lian@talktoloop.org', 'Lian'],
    );
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`id\`, \`email\`, \`nickname\`, \`visible\`)
       VALUES (?, ?, ?, ?)`,
      [uuidv4(), 'alex@talktoloop.org', 'Alex', false],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
