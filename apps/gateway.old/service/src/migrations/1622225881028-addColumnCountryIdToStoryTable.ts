import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class AddColumnCountryIdToStoryTable1622225881028
  implements MigrationInterface {
  private tableName = 'story';
  private foreignKeyCountryId = 'FKstoryToCountry';
  private indexCountryId = 'IDX_STORY_COUNTRY_ID';
  private codes = {
    ZMB: 'zm',
    PHI: 'ph',
    OTH: null,
  };
  private oldColumn = new TableColumn({
    name: 'country',
    type: 'varchar',
    length: '3',
    isNullable: false,
  });
  private newColumn = new TableColumn({
    name: 'country_id',
    type: 'smallint',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    const countries = await queryRunner.query(
      `SELECT \`id\`, \`code\` FROM \`country\` WHERE \`code\` IN (?)`,
      [Object.values(this.codes)],
    );

    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexCountryId,
        columnNames: ['country_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['country_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'country',
        name: this.foreignKeyCountryId,
      }),
    );

    for (const [key, value] of Object.entries(this.codes)) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`${this.newColumn.name}\` = ? WHERE \`${this.oldColumn.name}\` = ?`,
        [countries.find((item) => item.code === value)?.id, key],
      );
    }

    await queryRunner.dropColumn(this.tableName, this.oldColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const countries = await queryRunner.query(
      `SELECT \`id\`, \`code\` FROM \`country\` WHERE \`code\` IN (?)`,
      [Object.values(this.codes)],
    );
    const stories = await queryRunner.query(
      `SELECT DISTINCT \`${this.newColumn.name}\` FROM \`${this.tableName}\``,
    );
    const entries = Object.entries(this.codes);
    let code;

    await queryRunner.addColumn(this.tableName, this.oldColumn);

    for (const story of stories) {
      code = countries.find((item) => item.id === story.country_id)?.code;

      if (code) {
        await queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`${this.oldColumn.name}\` = ? WHERE \`${this.newColumn.name}\` = ?`,
          [entries.find((item) => item[1] === code)?.[0], story.country_id],
        );
      }
    }

    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCountryId);
    await queryRunner.dropIndex(this.tableName, this.indexCountryId);
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
