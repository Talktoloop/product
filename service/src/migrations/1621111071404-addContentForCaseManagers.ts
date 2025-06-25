import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class AddContentForCaseManagers1621111071404
  implements MigrationInterface {
  private tableName = 'case_manager';
  private tableNameExtend = 'case_manager_text';

  private content = [
    {
      id: uuidv4(),
      nickname: 'Lian',
      avatar: 'https://cdn.loop.elitecrew.io/lian.png',
      languages: [
        {
          languageId: 1,
          text:
            'As a Case Manager at Loop, I personally read sensitive stories written by people just like you. I do my utmost to ensure that any allegations of wrongdoing are investigated, and if necessary, action is taken. You can trust me to handle your sensitive story with care and discretion.',
        },
      ],
    },
    {
      id: uuidv4(),
      nickname: 'Joe',
      avatar: 'https://cdn.loop.elitecrew.io/placeholder.png',
      languages: [
        {
          languageId: 1,
          text:
            'As a Case Manager at Loop, I will try to help you. Please contact me any time you want',
        },
      ],
    },
    {
      id: uuidv4(),
      nickname: 'Jannet',
      avatar: 'https://cdn.loop.elitecrew.io/placeholder.png',
      languages: [
        {
          languageId: 1,
          text: 'As a Case Manager at Loop, I do my best',
        },
      ],
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const element of this.content) {
      await queryRunner.query(
        `INSERT INTO \`${this.tableName}\` (\`id\`, \`nickname\`, \`avatar\`) VALUES (?, ?, ?)`,
        [element.id, element.nickname, element.avatar],
      );

      for (const language of element.languages) {
        await queryRunner.query(
          `INSERT INTO \`${this.tableNameExtend}\` (\`case_manager_id\`, \`language_id\`, \`text\`) VALUES (?, ?, ?)`,
          [element.id, language.languageId, language.text],
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable(this.tableName);
    await queryRunner.clearTable(this.tableNameExtend);
  }
}
