import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class addTableIvrrScheduler1679293659294 implements MigrationInterface {
  tableName = 'ivrr_scheduler';

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
            name: 'source_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['story', 'comment'],
            enumName: 'typeEnum',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['inProgress', 'pending', 'done', 'failed'],
            enumName: 'statusEnum',
            isNullable: false,
          },
          {
            name: 'lang',
            type: 'varchar',
            length: '3',
            isNullable: false,
          },
          {
            name: 'provider_number',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'call_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'time',
            type: 'datetime',
            length: '6',
            isNullable: false,
          },
          {
            name: 'timezone',
            type: 'tinyint',
            isNullable: false,
          },
          {
            name: 'sequence_number',
            type: 'tinyint',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
