import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableRejectReasonsAndPutData1599652560190
  implements MigrationInterface {
  private tableName = 'reject_reason';
  private listOfRejectReasons = [
    'The story has offensive or discriminatory language in it',
    'The story does not follow the community standards, designed to ensure a safe space to share feedback',
    'There is a concern about the authenticity of the story',
    'There was a concern that the story could cause harm if posted publicly. It is being referred on to specialists',
    'The story does not respect the right to privacy of others',
  ];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '200',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    Promise.all(
      this.listOfRejectReasons.map(
        async (reason: string) =>
          await queryRunner.query(
            `
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `,
            [reason],
          ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
